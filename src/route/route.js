const express= require("express")
const router= express.Router()

const userController = require("../controller/userController")

router.post('/Signin', userController.userSignin);

router.post("/login",userController.loginUser)

router.all("/**", function (req, res) {
    res.status(400).send({
      status: false,
      message: "INVALID END-POINT: The API You requested is NOT available.",
    });
  });

module.exports = router;