import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLocal } from "../../service/userLocal";
import { message } from "antd";
import { userService } from "../../service/userService";

export const userThunk = createAsyncThunk(
  "userReducer/loginThunk",
  async (payload) => {
    try {
      const data = await userService.postLogin(payload);
      const userID = data.data.content.userID;
      userLocal.setId(userID);
      message.success("Login succes");

      return payload;
    } catch (error) {
      message.success("Login fail");
    }
  }
);
export const userInfor = createAsyncThunk(
  "userReducer/userInfor",
  async (payload) => {
    try {
      const inforUser = await userService.getInfor(
        payload,
        userLocal.getRoleName()
      );
      return inforUser.data.content;
    } catch (error) {
      message.success("Infor fail");
    }
  }
);

export const userStore = createAsyncThunk(
  "userReducer/store",
  async (payload) => {
    try {
      const list = await userService.getProduct(payload);
      return list;
    } catch (error) {
      message.success("get store fail");
    }
  }
);
export const userTrans = createAsyncThunk(
  "userReducer/transaction",
  async (payload) => {
    try {
      const trans = await userService.getTrans(
        payload,
        userLocal.getRoleName()
      );
      return trans.data.content;
    } catch (error) {
      message.success("get transaction fail");
    }
  }
);
export const transDetail = createAsyncThunk(
  "userReducer/transactionDetail",
  async (payload) => {
    try {
      const transDetail = await userService.getTransDetail(
        payload,
        userLocal.getRoleName()
      );
      return transDetail.data.content;
    } catch (error) {
      message.success("get transaction detail fail");
    }
  }
);
