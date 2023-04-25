import React, { useState, useEffect } from "react";
import _ from "lodash";

// import Redux component
import { useDispatch, useSelector } from "react-redux";
import wordSlice from "../../../redux/slices/wordSlice";

// import MUI components
import {
  Grid,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Stack,
} from "@mui/material";

import {
  ExpandMore as ExpandMoreIcon,
  RemoveCircle as RemoveCircleIcon,
  AddCircle as AddCircleIcon,
} from "@mui/icons-material";
import { FormDataText } from "../../../styled/formInput";

function TranslationItem({ data, title, langCode }) {
  const [input, setInput] = useState([]);
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.word.mode);

  const getInputData = (data) => {
    const { id, name, value } = data.target;
    input.forEach((x, index) => {
      if (x._id ? x._id === id : Number(id) === index) {
        let inputClone = _.cloneDeep(input);

        switch (name) {
          case "stagr":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "pos":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "misc":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "field":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "xref":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "gloss":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "stagk":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "s_inf":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "stagk":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "dial":
            inputClone[index] = { ...x, [name]: value };
            break;

          default:
            break;
        }

        dispatch(
          wordSlice.actions.update_sense({
            data: inputClone,
            langCode: langCode,
          })
        );
        console.log("[input]", input);
      }
    });
  };

  useEffect(() => {
    setInput(data);
  }, [data]);

  const removeTranslation = (arg) => {
    dispatch(wordSlice.actions.removeTranslation(arg));
  };

  return (
    <Box>
      <Grid container spacing="10px" paddingLeft="10px">
        {data.map((item, index) => {
          return (
            <Grid item key={item._id || index} xs={3}>
              <Grid container spacing="10px">
                <Grid item xs={12}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      variant="overline"
                      display="block"
                      gutterBottom
                      component="span"
                    >
                      * {title} Meanning {index + 1} *
                    </Typography>
                    {mode.adding ? (
                      <IconButton
                        onClick={() => {
                          removeTranslation({
                            langCode: langCode,
                            index: index,
                          });
                        }}
                      >
                        <RemoveCircleIcon color="error" />
                      </IconButton>
                    ) : null}
                  </Stack>
                </Grid>
                <Grid item xs={12}>
                  <FormDataText
                    title="gloss"
                    name="gloss"
                    data={item.gloss.join(", ")}
                    isEditting={mode.editting}
                    callback={getInputData}
                    id={item._id || index.toString()}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormDataText
                    title="pos"
                    name="pos"
                    data={item.pos.join(", ")}
                    isEditting={mode.editting}
                    callback={getInputData}
                    id={item._id || index.toString()}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormDataText
                    title="misc"
                    name="misc"
                    data={item.misc.join(", ")}
                    isEditting={mode.editting}
                    callback={getInputData}
                    id={item._id || index.toString()}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Show More</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box>
                        <Grid item xs={12}>
                          <Grid container spacing="10px">
                            <Grid item xs={12}>
                              <FormDataText
                                title="stagr"
                                name="stagr"
                                data={item.stagr.join(", ")}
                                isEditting={mode.editting}
                                callback={getInputData}
                                id={item._id || index.toString()}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormDataText
                                title="stagk"
                                name="stagk"
                                data={item.stagk}
                                isEditting={mode.editting}
                                callback={getInputData}
                                id={item._id || index.toString()}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormDataText
                                title="field"
                                name="field"
                                data={item.field.join(", ")}
                                isEditting={mode.editting}
                                callback={getInputData}
                                id={item._id || index.toString()}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormDataText
                                title="xref"
                                name="xref"
                                isEditting={mode.editting}
                                data={item.xref.join(", ")}
                                callback={getInputData}
                                id={item._id || index.toString()}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormDataText
                                title="s_inf"
                                name="s_inf"
                                data={item.s_inf}
                                isEditting={mode.editting}
                                callback={getInputData}
                                id={item._id || index.toString()}
                              />
                            </Grid>
                            <Grid item xs={12}>
                              <FormDataText
                                title="dial"
                                name="dial"
                                data={item.dial}
                                isEditting={mode.editting}
                                callback={getInputData}
                                id={item._id || index.toString()}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default TranslationItem;
