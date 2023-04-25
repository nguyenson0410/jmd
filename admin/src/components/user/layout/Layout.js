import React, { useState } from "react";
import _ from "lodash";

// import React components
import Search from "../../submenu/components/Search";
import Action from "../../submenu/components/Action";
import ListUser from "../../word/components/ListUser";
import UserDetail from "../componets/UserDetail";

// import Redux components
import { useSelector, useDispatch } from "react-redux";
import userSlice, {
  searchUserRequest,
  updateUserRequest,
  deleteUserRequest,
  registerUserRequest,
} from "../../../redux/slices/userSlice";

// import MUI components
import { Box, Stack } from "@mui/material";

function Layout() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);
  const mode = useSelector((state) => state.user.mode);
  const isLoginng = useSelector((state) => state.auth.mode.isLoginng);

  const searchUserRequestHandle = (query) => {
    dispatch(searchUserRequest(query));
  };
  const edit = () => {
    dispatch(userSlice.actions.edit());
  };
  const cancel = () => {
    dispatch(userSlice.actions.cancel());
  };
  const save = () => {
    if (mode.adding === true && mode.editting === true) {
      dispatch(registerUserRequest(user));
    }
    if (mode.adding === false && mode.editting === true) {
      dispatch(updateUserRequest(user));
    }
  };
  const add = () => {
    dispatch(userSlice.actions.add());
  };
  const del = (userId) => {
    dispatch(deleteUserRequest(userId));
  };

  return (
    <Stack direction="column" spacing="20px">
      <Box>
        <Stack
          direction="row"
          spacing="10px"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Action
            edit={edit}
            cancel={cancel}
            save={save}
            add={add}
            del={del}
            mode={mode}
            data={user}
          />
          <Search callback={searchUserRequestHandle} />
        </Stack>
      </Box>
      <Box>
        {user._id || mode.adding ? (
          <UserDetail />
        ) : isLoginng ? (
          <ListUser />
        ) : null}
      </Box>
    </Stack>
  );
}

export default Layout;
