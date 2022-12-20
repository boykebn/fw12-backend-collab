exports.errorHandler = (error, res) => {
  console.log(error);
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
  if (error.message.includes("backend error:")) {
    if (error.message.includes("code_expired")) {
      return res.status(400).json({
        succes: false,
        message: "Kode Expire!",
      });
    }
    if (error.message.includes("notfound_code_request")) {
      return res.status(400).json({
        succes: false,
        message: "Permintaan tidak ditemukan",
      });
    }
  }
  return res.status(500).json({
    succes: false,
    message: "Something happend in our backend",
  });
};
