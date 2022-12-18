const { selectAllUsers, selectEmployesBySkill, selectUser, insertUser, patchUser, deleteUser } = require("../models/Users.model");
const { errorHandler } = require("../helper/errorHandler.helper");

exports.readAllUsers = (req, res) => {
  selectAllUsers((err, result) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: "List of users",
      results: result.rows,
    });
  });
};

exports.readUsersBySkill = (req, res) => {
  req.query.page = parseInt(req.query.page) || 1;
  req.query.limit = parseInt(req.query.limit) || 4;
  req.query.search = req.query.search || "";
  req.query.sortBy = req.query.sortBy || "id";

  const filter = {
    limit: req.query.limit,
    offset: parseInt(req.query.page - 1) * req.query.limit,
    search: req.query.search,
    sortBy: req.query.sortBy,
  };

  const pageInfo = {
    page: req.query.page,
  };

  selectEmployesBySkill(filter, (err, result) => {
    if (err) {
      return errorHandler(err, res);
    }

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Movie not found",
      });
    }

    pageInfo.totalData = parseInt(result.rows.length);
    pageInfo.totalPage = Math.ceil(pageInfo.totalData / filter.limit);
    pageInfo.nextPage = req.query.page < pageInfo.totalPage ? req.query.page + 1 : null;
    pageInfo.prevPage = req.query.page > 1 ? req.query.page - 1 : null;
    
    return res.status(200).json({
      success: true,
      pageInfo,
      results: data.rows,
    });
  });
};

exports.readUser = (req, res) => {
  selectUser(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      results: result.rows[0],
    });
  });
};

exports.createUser = (req, res) => {
  insertUser(req.body, (err, result) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: "User created successfully",
      results: result.rows[0],
    });
  });
};

exports.updateUser = (req, res) => {
  patchUser(req.params.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(200).json({
        success: false,
        message: `User doesn't exist`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `User updated`,
      results: result.rows[0],
    });
  });
};

exports.deleteUser = (req, res) => {
  deleteUser(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: `User doesn't exist`,
      });
    }

    return res.status(200).json({
      success: true,
      message: `User deleter`,
      results: result.rows[0],
    });
  });
};
