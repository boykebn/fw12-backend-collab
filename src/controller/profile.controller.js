const {
  selectProfile,
  selectExperienceProfile,
  selectPortofolioProfile,
} = require("../models/profile.model");

exports.readProfile = (req, res) => {
  selectProfile(req.userData.id, (err, data) => {
    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Get profile user",
      results: data.rows[0],
    });
  });
};

exports.readExperience = (req, res) => {
  selectExperienceProfile(req.userData.id, (err, data) => {
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
      results: data.rows,
    });
  });
};

exports.readPortofolio = (req, res) => {
  selectPortofolioProfile(req.userData.id, (err, data) => {
    if (err) {
      console.log(err);
    }

    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Portofolio not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "List of portofolio",
      results: data.rows,
    });
  });
};
