import React, { useEffect } from "react";

// import React components
import { FormDataText } from "../../../styled/formInput";

// import Redux
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersRequest } from "../../../redux/slices/usersSlice";

// import MUI components
import { Box, Stack, Grid, Pagination } from "@mui/material";

function ListUser() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.users.data);
  useEffect(() => {
    dispatch(getAllUsersRequest(1));
  }, []);

  const paginationHandle = (e, p) => {
    dispatch(getAllUsersRequest(p));
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
              <Grid item xs={4.5}>
                <FormDataText title="_id" name="_id" data={item._id} />
              </Grid>
              <Grid item xs={2}>
                <FormDataText
                  title="username"
                  name="username"
                  data={item.username}
                />
              </Grid>
              <Grid item xs={3.5}>
                <FormDataText title="email" name="email" data={item.email} />
              </Grid>
              <Grid item xs={2}>
                <FormDataText title="role" name="role" data={item.role} />
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

export default ListUser;
