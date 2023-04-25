import React from "react";

// import React components
import General from "../components/General";
import Writting from "../components/Writting";
import Reading from "../components/Reading";
import TranslationPanel from "../components/TranslationPanel";
import Search from "../../submenu/components/Search";
import Action from "../../submenu/components/Action";

// import Redux components
import { useSelector, useDispatch } from "react-redux";
import wordSlice, {
  searchWordRequest,
  updateWordRequest,
  addWordRequest,
  deleteWordRequest,
} from "../../../redux/slices/wordSlice";

// import MUI components
import { Box, Stack, Typography } from "@mui/material";
import ListWord from "../components/ListWord";

function Layout() {
  const dispatch = useDispatch();

  const { mode, query } = useSelector((state) => state.word);
  const word = useSelector((state) => state.word.data);
  const isLoginng = useSelector((state) => state.auth.mode.isLoginng);

  const edit = () => {
    dispatch(wordSlice.actions.edit());
  };
  const cancel = () => {
    dispatch(searchWordRequest(query));
  };

  const save = async () => {
    if (mode.adding === true && mode.editting === true) {
      dispatch(addWordRequest(word));
    }
    if (mode.adding === false && mode.editting === true) {
      dispatch(updateWordRequest(word));
    }
  };
  const add = () => {
    dispatch(wordSlice.actions.add());
  };

  const del = (wordId) => {
    dispatch(deleteWordRequest(wordId));
  };

  const searchWordRequestHandle = (query) => {
    dispatch(searchWordRequest(query));
  };

  return (
    <Stack direction="column" spacing="20px">
      <Box>
        <Stack direction="column" spacing="10px">
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
              data={word}
            />
            <Search callback={searchWordRequestHandle} />
          </Stack>
          <Stack
            direction="row"
            spacing="10px"
            justifyContent="start"
            alignItems="center"
          >
            <Box width="40%">
              <General />
            </Box>
          </Stack>
          {word._id || mode.adding ? (
            <Stack direction="row" spacing="10px">
              <Writting />
              <Reading />
            </Stack>
          ) : isLoginng ? (
            <ListWord />
          ) : null}
        </Stack>
      </Box>
      {word._id || mode.adding ? (
        <Box>
          <TranslationPanel />
        </Box>
      ) : null}
    </Stack>
  );
}

export default Layout;
