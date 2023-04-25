import React, { useState, useEffect } from "react";
import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";
import wordSlice from "../../../redux/slices/wordSlice";
// import React components

// import MUI components
import { Grid } from "@mui/material";
import {
  FormDataText,
  FormDataSelect,
  FormDataNumber,
} from "../../../styled/formInput";

function General() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.word.data);
  const mode = useSelector((state) => state.word.mode);

  const getInputData = (data) => {
    const { id, name, value } = data.target;
    if (value === "") return dispatch(wordSlice.actions.update_ent_seq(0));
    dispatch(wordSlice.actions.update_ent_seq(Number(value)));
  };

  return (
    <Grid container spacing="10px" paddingLeft="10px">
      {data._id ? (
        <>
          <Grid item xs={5}>
            <FormDataText
              title="_id"
              name="_id"
              data={data._id}
              isEditting={false}
            />
          </Grid>
        </>
      ) : (
        <Grid item xs={5}></Grid>
      )}

      {data._id || mode.adding ? (
        <>
          <Grid item xs={3}>
            <FormDataText
              title="ent_seq"
              name="ent_seq"
              data={data.ent_seq.toString()}
              isEditting={mode.adding}
              callback={getInputData}
            />
          </Grid>
          <Grid item xs={2}>
            <FormDataSelect
              title="Is Active"
              name="isActive"
              data={data.isActive}
              isEditting={false}
            />
          </Grid>
        </>
      ) : (
        <Grid item xs={12}></Grid>
      )}
    </Grid>
  );
}

export default General;
