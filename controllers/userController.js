import { StatusCodes } from "http-status-codes";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get current user" });
};
export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Application Status" });
};
export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "Update user" });
};
