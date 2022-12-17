const {
  selectAllExperience,
  selectExperience,
  insertExperience,
  patchExperience,
  deleteExperience,
} = require("../models/experiences.model");

exports.readAllExperience = (req, res) => {
  selectAllExperience((err, data) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: "List of experiences",
      results: data.rows,
    });
  });
};

exports.readExperience = (req, res) => {
  selectExperience(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Experience not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "List of experience",
      results: data.rows[0],
    });
  });
};

exports.createExperience = (req, res) => {
  insertExperience(req.body, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).json({
      success: true,
      message: "Experience created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateExperience = (req, res) => {
  patchExperience(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Experience doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience Updated",
      results: data.rows,
    });
  });
};

exports.deleteExperience = (req, res) => {
  deleteExperience(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Experience doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Experience Deleted",
      results: data.rows,
    });
  });
};
