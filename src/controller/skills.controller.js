const {
  selectAllSkills,
  selectSkill,
  insertSkill,
  patchSkill,
  deleteSkill,
} = require("../models/skills.model");

exports.readAllSkills = (req, res) => {
  selectAllSkills((err, result) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: "List of skills",
      results: result.rows,
    });
  });
};

exports.readSkill = (req, res) => {
  selectSkill(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Skill not found",
      });
    }

    return res.status(200).json({
      success: true,
      results: result.rows[0],
    });
  });
};

exports.createSkill = (req, res) => {
  insertSkill(req.body, (err, result) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: "Skill created successfully",
      results: result.rows[0],
    });
  });
};

exports.updateSkill = (req, res) => {
  patchSkill(req.params.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Skill doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill Updated",
      results: result.rows[0],
    });
  });
};

exports.deleteSkill = (req, res) => {
  deleteSkill(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
    }

    if (result.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Skill doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill Deleted",
      results: result.rows[0],
    });
  });
};
