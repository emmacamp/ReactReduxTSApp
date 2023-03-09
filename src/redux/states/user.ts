import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { clearLocalStorage, persistLocalStorage } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

const userKey = "user";

export const userSlice = createSlice({
  name: "User",
  initialState: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      const result = action.payload;
      persistLocalStorage<UserInfo>(userKey, result);
      return result;
    },
    updateUser: (state, action) => {
      const result = { ...state, ...action.payload };
      persistLocalStorage<UserInfo>(userKey, result);
      return result;
    },
    resetUser: () => {
      clearLocalStorage();
      return EmptyUserState;
    },
  },
});

export const { createUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
