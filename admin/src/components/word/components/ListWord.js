import React, { useEffect } from "react";

// import React components
import { FormDataText } from "../../../styled/formInput";

// import Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllWordsRequest } from "../../../redux/slices/wordsSlice";

// import MUI components
import { Box, Stack, Grid, Pagination } from "@mui/material";

function ListWord() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.words.data);
  useEffect(() => {
    dispatch(getAllWordsRequest(1));
  }, []);

  const paginationHandle = (e, p) => {
    dispatch(getAllWordsRequest(p));
  };

  return (
    <Box flex={1}>
      <Grid container alignItems="center">
        {data.map((item, index) => (
          <Grid item xs={6} key={index}>
            <Grid
              container
              spacing="10px"
              justifyContent="center"
              padding="10px"
              alignItems="center"
            >
              <Grid item xs={4}>
                <FormDataText title="_id" name="_id" data={item._id} />
              </Grid>
              <Grid item xs={2}>
                <FormDataText
                  title="ent_seq"
                  name="ent_seq"
                  data={item.ent_seq.toString()}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDataText
                  title="keb"
                  name="keb"
                  data={item.k_ele.length > 0 ? item.k_ele[0].keb : "No Data"}
                />
              </Grid>
              <Grid item xs={3}>
                <FormDataText
                  title="reb"
                  name="reb"
                  data={item.r_ele.length > 0 ? item.r_ele[0].reb : "No Data"}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Stack direction="row" justifyContent="end">
        <Pagination
          count={100}
          color="primary"
          boundaryCount={2}
          siblingCount={1}
          onChange={paginationHandle}
        />
      </Stack>
    </Box>
  );
}

export default ListWord;
