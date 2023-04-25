import React, { useState, useEffect } from "react";
import _ from "lodash";

// import React components
import { FormDataText } from "../../../styled/formInput";

// import Redux component
import { useDispatch, useSelector } from "react-redux";
import wordSlice from "../../../redux/slices/wordSlice";

// import MUI components
import { Grid, Box, Typography, IconButton, Stack } from "@mui/material";
import {
  AddCircle as AddCircleIcon,
  RemoveCircle as RemoveCircleIcon,
} from "@mui/icons-material";

function Writting() {
  const [input, setInput] = useState([]);
  const dispatch = useDispatch();
  const writtingData = useSelector((state) => state.word.data);
  const mode = useSelector((state) => state.word.mode);

  const getInputData = (data) => {
    const { id, name, value } = data.target;
    input.forEach((x, index) => {
      if (x._id ? x._id === id : Number(id) === index) {
        let inputClone = _.cloneDeep(input);

        switch (name) {
          case "keb":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "ke_inf":
            inputClone[index] = { ...x, [name]: value };
            break;
          case "ke_pri":
            inputClone[index] = {
              ...x,
              [name]: value.replaceAll(" ", "").split(","),
            };
            break;
          default:
            break;
        }

        dispatch(wordSlice.actions.update_k_ele(inputClone));
      }
    });
  };

  useEffect(() => {
    setInput(writtingData.k_ele);
  }, [writtingData]);

  const addWrittingHandle = (e) => {
    e.preventDefault();
    dispatch(wordSlice.actions.addWritting());
  };
  const removeWrittingHandle = (index) => {
    dispatch(wordSlice.actions.removeWritting(index));
  };
  return (
    <Box flex={2}>
      {writtingData.k_ele.slice(0, 1).map((item, index) => (
        <Grid
          container
          spacing="10px"
          key={item._id || index}
          alignItems="center"
          paddingLeft="10px"
        >
          <Grid item xs={5}>
            <FormDataText
              title="keb"
              name="keb"
              data={item.keb}
              isEditting={mode.editting}
              callback={getInputData}
              id={item._id || index.toString()}
            />
          </Grid>
          <Grid item xs={3}>
            <FormDataText
              title="ke_pri"
              name="ke_pri"
              data={item.ke_pri.join(", ")}
              isEditting={mode.editting}
              callback={getInputData}
              id={item._id || index.toString()}
            />
          </Grid>
          <Grid item xs={3}>
            <FormDataText
              title="ke_inf"
              name="ke_inf"
              data={item.ke_inf}
              isEditting={mode.editting}
              callback={getInputData}
              id={item._id || index.toString()}
            />
          </Grid>
          {mode.adding ? (
            <Grid item xs={1}>
              <IconButton
                onClick={() => {
                  removeWrittingHandle(index);
                }}
              >
                <RemoveCircleIcon color="error" />
              </IconButton>
            </Grid>
          ) : null}
        </Grid>
      ))}

      {writtingData.k_ele.length > 1 ? (
        <Typography variant="overline" display="block" gutterBottom pl="10px">
          * Other Kanji Form *
        </Typography>
      ) : null}

      {writtingData.k_ele.length > 1
        ? writtingData.k_ele.slice(1).map((item, index) => (
            <Grid
              container
              spacing="10px"
              alignItems="center"
              paddingLeft="10px"
              key={item._id || index}
            >
              <Grid item xs={5}>
                <FormDataText
                  title="keb"
                  name="keb"
                  data={item.keb}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDataText
                  title="ke_pri"
                  name="ke_pri"
                  data={item.ke_pri.join(", ")}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDataText
                  title="ke_inf"
                  name="ke_inf"
                  data={item.ke_inf}
                  isEditting={mode.editting}
                  callback={getInputData}
                  id={item._id || (index + 1).toString()}
                />
              </Grid>
              {mode.adding ? (
                <Grid item xs={1}>
                  <IconButton
                    onClick={() => {
                      removeWrittingHandle(index + 1);
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
          <IconButton onClick={addWrittingHandle}>
            <AddCircleIcon color="primary" />
          </IconButton>
        </Stack>
      ) : null}
    </Box>
  );
}

export default Writting;
