const {
  selectAllPurpose,
  selectPurposeById,
  insertPurpose,
  updatePurpose,
  deletedPurpose,
} = require("../models/purposes.model");

exports.readAllPurpose = (req, res) => {
  selectAllPurpose((err, data) => {
    if (err) {
      console.log(err);
      // return errorHandler(err, res);
    }
    return res.status(200).json({
      succes: true,
      message: "List of Purpose",
      results: data.rows,
    });
  });
};

exports.readPurposeById = (req, res) => {
  selectPurposeById(req.params, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Purpose not found",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "List of Purpose By Id",
      results: data.rows[0],
    });
  });
};

exports.createPurpose = (req, res) => {
  insertPurpose(req.body, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).json({
      succes: true,
      message: "Create Purpose succes",
      results: data.rows[0],
    });
  });
};

exports.UpdatePurpose = (req, res) => {
  updatePurpose(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Purpose doesn't exist",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "Update Purpose succes",
      results: data.rows,
    });
  });
};

exports.deletePurpose = (req, res) => {
  deletedPurpose(req.params, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Purpose doesn't exist",
      });
    }

    return res.status(200).json({
      succes: true,
      message: "Delete Purpose succes",
      results: data.rows,
    });
  });
};
