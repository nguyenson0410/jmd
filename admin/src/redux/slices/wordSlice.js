import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// import Apis
import {
  searchWordApi,
  updateWordApi,
  addWordApi,
  deleteWordApi,
} from "../../apis/word";

const wordSlice = createSlice({
  name: "word",
  initialState: {
    mode: {
      editting: false,
      adding: false,
    },
    query: "",
    data: {
      _id: "",
      ent_seq: "",
      isActive: "",
      createdAt: "",
      k_ele: [],
      r_ele: [],
      sense: {
        eng: [],
        ger: [],
        rus: [],
        dut: [],
        swe: [],
        fre: [],
        spa: [],
        hun: [],
        slv: [],
      },
    },
  },
  reducers: {
    edit: (state, action) => {
      state.mode.editting = true;
      state.mode.adding = false;
    },

    cancel: (state, action) => {
      state.mode.editting = false;
      state.mode.adding = false;
    },

    updateQuery: (state, action) => {
      state.query = action.payload;
    },
    update_k_ele: (state, action) => {
      state.data.k_ele = action.payload;
    },
    update_r_ele: (state, action) => {
      state.data.r_ele = action.payload;
    },
    update_sense: (state, action) => {
      state.data.sense[action.payload.langCode] = action.payload.data;
    },
    update_ent_seq: (state, action) => {
      state.data.ent_seq = action.payload;
    },
    addTranslation: (state, action) => {
      state.data.sense[action.payload].push({
        stagk: "",
        stagr: [],
        pos: [],
        misc: [],
        field: [],
        xref: [],
        s_inf: "",
        gloss: [],
        dial: "",
      });
    },
    addWritting: (state, action) => {
      state.data.k_ele.push({
        keb: "",
        ke_inf: "",
        ke_pri: [],
      });
    },
    removeWritting: (state, action) => {
      state.data.k_ele.splice(action.payload, 1);
    },
    addReading: (state, action) => {
      state.data.r_ele.push({
        reb: "",
        re_restr: [],
        re_inf: "",
        re_pri: [],
      });
    },
    removeReading: (state, action) => {
      state.data.r_ele.splice(action.payload, 1);
    },
    removeTranslation: (state, action) => {
      state.data.sense[action.payload.langCode].splice(action.payload.index, 1);
    },
    add: (state, action) => {
      state.mode.editting = true;
      state.mode.adding = true;
      state.data = {
        ent_seq: "",
        isActive: true,
        k_ele: [],
        r_ele: [
          {
            reb: "",
            re_restr: [],
            re_inf: "",
            re_pri: [],
          },
        ],
        sense: {
          eng: [],
          ger: [],
          rus: [],
          dut: [],
          swe: [],
          fre: [],
          spa: [],
          hun: [],
          slv: [],
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchWordRequest.pending, (state, action) => {})
      .addCase(searchWordRequest.fulfilled, (state, action) => {
        if (action.payload.length !== 0) {
          state.query = action.meta.arg;
          state.data = action.payload[0];
          state.mode.editting = false;
          state.mode.adding = false;
        } else {
          state.mode.editting = false;
          state.mode.adding = false;
          state.data = {
            _id: "",
            ent_seq: "",
            isActive: "",
            createdAt: "",
            k_ele: [],
            r_ele: [],
            sense: {
              eng: [],
              ger: [],
              rus: [],
              dut: [],
              swe: [],
              fre: [],
              spa: [],
              hun: [],
              slv: [],
            },
          };
        }
      })
      .addCase(updateWordRequest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.mode.editting = false;
        state.mode.adding = false;
      })
      .addCase(deleteWordRequest.fulfilled, (state, action) => {
        state.data = {
          _id: "",
          ent_seq: "",
          isActive: "",
          createdAt: "",
          k_ele: [],
          r_ele: [],
          sense: {
            eng: [],
            ger: [],
            rus: [],
            dut: [],
            swe: [],
            fre: [],
            spa: [],
            hun: [],
            slv: [],
          },
        };
      })
      .addCase(addWordRequest.fulfilled, (state, action) => {
        state.data = action.payload;
        state.mode.editting = false;
        state.mode.adding = false;
      });
  },
});

export const searchWordRequest = createAsyncThunk("word", (query) => {
  return searchWordApi(query);
});

export const updateWordRequest = createAsyncThunk("updateword", (payload) => {
  return updateWordApi(payload._id, payload);
});

export const addWordRequest = createAsyncThunk("addWord", (payload) => {
  return addWordApi(payload);
});

export const deleteWordRequest = createAsyncThunk("deleteWord", (payload) => {
  return deleteWordApi(payload);
});

export default wordSlice;
