const {
  selectAllCompany,
  selectCompany,
  insertCompany,
  patchCompany,
  deleteCompany,
} = require("../models/company.model");

exports.readAllCompany = (req, res) => {
  selectAllCompany((err, data) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: "List of company",
      results: data.rows,
    });
  });
};

exports.readCompany = (req, res) => {
  selectCompany(req.params.id, (err, data) => {
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

exports.createCompany = (req, res) => {
  insertCompany(req.body, (err, data) => {
    if (err) {
      console.log(err);
    }
    return res.status(200).json({
      success: true,
      message: "Company created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateCompany = (req, res) => {
  patchCompany(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Company doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Company Updated",
      results: data.rows,
    });
  });
};

exports.deleteCompany = (req, res) => {
  deleteCompany(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Skill doesn't exist",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill Deleted",
      results: data.rows,
    });
  });
};
