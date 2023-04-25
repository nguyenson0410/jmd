import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";

// import React components
import { FormDataText, FormDataSelect } from "../../../styled/formInput";

// import Redux component
import { useDispatch } from "react-redux";
import wordSlice from "../../../redux/slices/wordSlice";

// import MUI components
import { Grid, Box, Typography, IconButton, Stack } from "@mui/material";
import {
  AddCircle as AddCircleIcon,
  RemoveCircle as RemoveCircleIcon,
} from "@mui/icons-material";

function Reading({ word, cb }) {
  const [input, setInput] = useState([]);
  const dispatch = useDispatch();
  const readingData = useSelector((state) => state.word.data);
  const mode = useSelector((state) => state.word.mode);

  const getInputData = (data) => {
    const { id, name, value } = data.target;
    input.forEach((x, index) => {
      if (x._id ? x._id === id : Number(id) === index) {
        let inputClone = _.cloneDeep(input);

        switch (name) {
          case "reb":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "re_inf":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "re_pri":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          case "re_restr":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          default:
            break;
        }

        dispatch(wordSlice.actions.update_r_ele(inputClone));
      }
    });
  };

  useEffect(() => {
    setInput(readingData.r_ele);
  }, [readingData]);

  const addReadingHandle = () => {
    dispatch(wordSlice.actions.addReading());
  };
  const removeReadinghandle = (index) => {
    dispatch(wordSlice.actions.removeReading(index));
  };
  return (
    <Box flex={3} alignItems="center">
      {readingData.r_ele.slice(0, 1).map((item, index) => {
        return (
          <Grid
            container
            spacing="10px"
            paddingLeft="10px"
            key={item._id || index}
            alignItems="center"
            alignContent="center"
          >
            <Grid item xs={2}>
              <FormDataText
                title="reb"
                name="reb"
                data={item.reb}
                isEditting={mode.editting}
                callback={getInputData}
                id={item._id || index.toString()}
              />
            </Grid>
            <Grid item xs={2}>
              <FormDataText
                title="re_pri"
                name="re_pri"
                data={item.re_pri.join(", ")}
                isEditting={mode.editting}
                callback={getInputData}
                id={item._id || index.toString()}
              />
            </Grid>
            <Grid item xs={3}>
              <FormDataText
                title="re_inf"
                name="re_inf"
                data={item.re_inf}
                isEditting={mode.editting}
                callback={getInputData}
                id={item._id || index.toString()}
              />
            </Grid>
            <Grid item xs={2}>
              <FormDataText
                title="re_restr"
                name="re_restr"
                data={item.re_restr.join(", ")}
                isEditting={mode.editting}
                callback={getInputData}
                id={item._id || index.toString()}
              />
            </Grid>
            <Grid item xs={2}>
              <FormDataSelect
                title="no_kanji"
                data={item.no_kanji ? true : false}
              />
            </Grid>
            {mode.adding ? (
              <Grid item>
                <IconButton>
                  <RemoveCircleIcon />
                </IconButton>
              </Grid>
            ) : null}
          </Grid>
        );
      })}

      {readingData.r_ele.length > 1 ? (
        <Typography variant="overline" display="block" gutterBottom pl={1}>
          * Other Kana Form *
        </Typography>
      ) : null}

      {readingData.r_ele.length > 1
        ? readingData.r_ele.slice(1).map((item, index) => (
            <Grid
              container
              spacing="10px"
              alignItems="center"
              paddingLeft="10px"
              key={item._id || index}
            >
              <Grid item xs={2}>
                <FormDataText
                  title="reb"
                  name="reb"
                  data={item.reb}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              <Grid item xs={2}>
                <FormDataText
                  title="re_pri"
                  name="re_pri"
                  data={item.re_pri.join(", ")}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDataText
                  title="re_inf"
                  name="re_inf"
                  data={item.re_inf}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              <Grid item xs={2}>
                <FormDataText
                  title="re_restr"
                  name="re_restr"
                  data={item.re_restr.join(", ")}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              <Grid item xs={2}>
                <FormDataSelect
                  title="no_kanji"
                  data={item.no_kanji ? true : false}
                />
              </Grid>
              {mode.adding ? (
                <Grid item xs={1}>
                  <IconButton
                    onClick={() => {
                      removeReadinghandle(index + 1);
                    }}
                  >
                    <RemoveCircleIcon color="error" />
                  </IconButton>
                </Grid>
              ) : null}
            </Grid>
          ))
        : null}

      {mode.adding ? (
        <Stack direction="row" justifyContent="center">
          <IconButton onClick={addReadingHandle}>
            <AddCircleIcon color="primary" />
          </IconButton>
        </Stack>
      ) : null}
    </Box>
  );
}

export default Reading;
