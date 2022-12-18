const {
  selectUserByEmail,
  insertRegisterEmploye,
  insertRegisterRecruter,
  patchUser,
} = require("../models/users.model");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../helper/errorHandler.helper");
const { validationResult } = require("express-validator");
const { insertResetPassword, selectResetPasswordByEmailAndCode, deletedResetPassword } = require("../models/resetPassword.model");

exports.login = (req, res) => {
  selectUserByEmail(req.body.email, (err, { rows }) => {
    if (rows.length) {
      const [user] = rows;
      if (req.body.password === user.password) {
        const token = jwt.sign({ id: user.id }, "backend-secret");
        return res.status(200).json({
          success: true,
          message: "login success",
          results: {
            token,
          },
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Wrong email or password",
        });
      }
    } else {
      return res.status(401).json({
        success: false,
        message: "Wrong email or password",
      });
    }
  });
};

exports.registerEmploye = (req, res) => {
  const errorValidation = validationResult(req);
  if (!errorValidation.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errorValidation
        .array()
        .map((e) => e.msg)
        .toString()
        .split(", "),
    });
  }

  insertRegisterEmploye(req.body, (error, data) => {
    if (error) {
      return errorHandler(error, res);
    } else {
      const [user] = data.rows;
      const token = jwt.sign({ id: user.id }, "backend-secret");

      return res.status(200).json({
        success: true,
        message: "Register Success",
        results: token,
      });
    }
  });
};

exports.registerRecruter = (req, res) => {
  const errorValidation = validationResult(req);
  if (!errorValidation.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errorValidation
        .array()
        .map((e) => e.msg)
        .toString()
        .split(", "),
    });
  }

  insertRegisterRecruter(req.body, (error, data) => {
    if (error) {
      return errorHandler(error, res);
    } else {
      const [user] = data.userQuery.rows;
      const token = jwt.sign({ id: user.id }, "backend-secret");

      return res.status(200).json({
        success: true,
        message: "Register Success",
        results: token,
      });
    }
  });
};


//request for reset password
exports.forgotPassword = (req, res) => {
  const { email } = req.body;
  selectUserByEmail(email, (err, { rows: user }) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (user.length) {
      const [users] = user;
      const data = {
        email,
        userId: users.id,
        codeUnique: Math.ceil(Math.random() * 90000)
      }
      insertResetPassword(data, (err, {rows: results}) => {
        if (results.length) {
          return res.status(200).json({
            success: true,
            message: 'Reset Password has been requested'
          });
        }
      });
    }else {
      return res.status(400).json({
        success: false,
        message: 'User Not Found!'
      })
    }
  });
};


// execution or validation reset password
exports.resetPassword = (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    selectResetPasswordByEmailAndCode(req.body, (err, { rows: user }) => {
      if (err) {
        return errorHandler(err, res);
      }
      try {
        if (user.length) {
          // console.log(user)
          const [resetRequest] = user;
          if (new Date(resetRequest.createdAt).getTime() + 15 * 60 * 1000 < new Date().getTime()) {
            throw Error('backend error: code_expired')
          }
          patchUser(resetRequest.userId, { password }, (err, { rows: user }) => {
            if (err) {
              return errorHandler(err, res);
            }
            if (user.length) {
              // console.log(user.length)
              deletedResetPassword(resetRequest.id, (err, { rows }) => {
                if (rows.length) {
                  return res.status(200).json({
                    success: true,
                    message: 'Password succes updated, please relogin'
                  });
                }
              });
            }
          });
        }else {
          throw Error('backend error: notfound_code_request')
        }
      }catch(err) {
        return errorHandler(err, res);
      }
    });
  }else {
    return res.status(400).json({
      success: false,
      message: 'password and confirm password not match'
    });
  }
};