const {
  selectAllUsers,
  selectEmployesBySkill,
  selectUser,
  insertUser,
  patchUser,
  deleteUser,
  selectCompanyByUserId,
  countAllEmployeBySkill
} = require("../models/users.model");
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
  req.body.status = req.body.status || ""

  const filter = {
    limit: req.query.limit,
    offset: parseInt(req.query.page - 1) * req.query.limit,
    search: req.query.search,
    sortBy: req.query.sortBy,
    status: req.body.status
  };

  const pageInfo = {
    page: req.query.page,
  };

  countAllEmployeBySkill(filter, (err, data) => {
    if(err){
      return errorHandler(err,res)
    }

    
    selectEmployesBySkill(filter, (err, result) => {
      if (err) {
        return errorHandler(err, res);
      }
      
      if (result.rows.length === 0) {
        return res.status(400).json({
          success: false,
          message: "User not found",
        });
      }

      pageInfo.totalData = parseInt(data.rows[0].totalData);
      pageInfo.totalPage = Math.ceil(pageInfo.totalData / filter.limit);
      pageInfo.nextPage =
        req.query.page < pageInfo.totalPage ? req.query.page + 1 : null;
      pageInfo.prevPage = req.query.page > 1 ? req.query.page - 1 : null;
      
      return res.status(200).json({
        success: true,
        pageInfo,
        results: result.rows,
      });
  })
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

exports.readCompanyByUserId = (req, res) => {
  selectCompanyByUserId(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Company not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "List of company",
      results: data.rows[0],
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
