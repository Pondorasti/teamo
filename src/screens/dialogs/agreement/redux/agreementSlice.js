import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import firestore from "../../../../api/firebase/firestore"
import * as types from "./types"
import { selectCurrentUserId } from "../../../../redux/slices/currentUser/currentUserSlice"

const usersRef = firestore.collection("users")

const initialState = {
  status: "idle",
  error: null,
}

export const acceptAgreement = createAsyncThunk(types.accept, async (_, { getState }) => {
  const id = selectCurrentUserId(getState())
  await usersRef.doc(id).update({ agreement: true })
})

const agreementSlice = createSlice({
  name: types.agreement,
  initialState,
  reducers: {},
  extraReducers: {
    // eslint-disable-next-line no-unused-vars
    [acceptAgreement.pending]: (state, action) => {
      state.status = "loading"
    },
    // eslint-disable-next-line no-unused-vars
    [acceptAgreement.fulfilled]: (state, action) => {
      state.status = "succeeded"
    },
    [acceptAgreement.rejected]: (state, action) => {
      state.status = "failed"
      state.error = action.error.message
    },
  },
})

export const selectAgreementStatus = (state) =>
  state[types.agreement].status === "loading"

export default agreementSlice.reducer
