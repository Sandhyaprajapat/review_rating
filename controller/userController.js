const bcrypt = require("bcrypt")
const user = require("../models/user_Schema");

//user signup api
const userSignup = async function (req, res) {
  console.log(req.body);
  const { email, password } = req.body;
  const userData = await user(req.body);
  try {
    const isUserExists = await user.findOne({ email: email });
    if (isUserExists) {
      return res.status(409).json({
        status: false,
        error: "Email already exit",
      });

    }

    const salt = await bcrypt.genSalt(10)
    userData.password = await bcrypt.hash(password, salt);

    await userData.save()
    return res.status(201).json({
      sucess: true,
      message: "registation successfully",

    });
  }
  catch (err) {
    res.status(500).json({
      status: false,
      error: err.message
    })
  }
}
module.exports = {userSignup}


