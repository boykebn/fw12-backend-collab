exports.readProfile = (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Get profile",
  });
};
