const { selectAllUsers, selectUser, insertUser, patchUser, deleteUser } = require("../models/Users.model");

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

    if(result.rows.length === 0 ){
        return res.status(200).json({
          success: false,
          message: `User doesn't exist`,
        });
    }
    
    return res.status(200).json({
      success: true,
      message: `User updated`,
      results: result.rows[0]
    });
  });
};

exports.deleteUser = (req, res) => {
    deleteUser(req.params.id, (err, result) => {
        if(err) {
            console.log(err)
        } 

        if(result.rows.length === 0) {
            return res.status(400).json({
                success: false,
                message: `User doesn't exist`
            })
        }

        return res.status(200).json({
            success: true, 
            message: `User deleter`,
            results: result.rows[0]
        })
    })
}