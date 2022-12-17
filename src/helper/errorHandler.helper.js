exports.errorHandler = (error, res) => {
  if (error.message.includes(' unique constraint "users_email_unique"')) {
    return res.status(400).json({
      success: false,
      message: "Email already used",
    });
  }
  if (error.message.includes(' unique constraint "users_phonenumber_unique"')) {
    return res.status(400).json({
      success: false,
      message: "Phone number already used",
    });
  }
};
