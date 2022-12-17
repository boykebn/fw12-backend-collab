const {
  selectAllResetPassword,
  selectResetPasswordById,
  insertResetPassword,
  updateResetPassword,
  deletedResetPassword,
} = require("../models/resetPassword.model");

exports.readAllResetPassword = (req, res) => {
  selectAllResetPassword((err, data) => {
    if (err) {
      console.log(err);
      //   return errorHandler(err, res);
    }
    return res.status(200).json({
      succes: true,
      message: "List of Reset Password",
      results: data.rows,
    });
  });
};

exports.readResetPasswordById = (req, res) => {
  selectResetPasswordById(req.params, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Reset Password not found",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "List of Reset Password By Id",
      results: data.rows[0],
    });
  });
};

exports.createResetPassword = (req, res) => {
  insertResetPassword(req.body, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).json({
      succes: true,
      message: "Create Reset Password succes",
      results: data.rows[0],
    });
  });
};

exports.UpdateResetPassword = (req, res) => {
  updateResetPassword(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Reset Password doesn't exist",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "Update Reset Password succes",
      results: data.rows,
    });
  });
};

exports.deleteResetPassword = (req, res) => {
  deletedResetPassword(req.params, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Reset Password doesn't exist",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "Delete Reset Password succes",
      results: data.rows,
    });
  });
};
