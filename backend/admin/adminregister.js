const router = require("express").Router();
const adminregister = require("../model/adminregister");
const emailValidator = require("email-validator");

router.post("/adminregister", async (req, res) => {
  const { name, email, password, cpassword, phone, city } = req.body;
  const is_check = await adminregister.find({ email: email });
  const is_check1 = await adminregister.find().sort({ _id: -1 }).limit(1);
  const member_id = is_check1.length ? Number(is_check1[0].member_id) + 1 : 1;
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  //   console.log(phone.length, "phone");    
  if (is_check.length > 0) {
    res.send({
      status: false,
      data: [],
      message: "Email already Exist",
    });
  }
  else if (!name) {
    res.send({
      status: false,
      data: [],
      message: "Enter Your Name",
    });
  } else if (!city) {
    res.send({
      status: false,
      data: [],
      message: "Enter Your City",
    });

  } else if (!email) {
    res.send({
      status: false,
      data: [],
      message: "Enter Your Email Address",
    });
  } else if (!emailRegexp.test(req.body.email)) {
    res.send({
      status: false,
      data: [],
      message: "Enter Valid Email Address",
    });
  } else if (!phone) {
    res.send({
      status: false,
      data: [],
      message: "Enter phone Number",
    });
  }
  else if (phone.toString().length < 10) {
    res.send({
      status: false,
      data:[],
      message: "Enter atleast 10 Character in phone Number",
    });

  } else if (phone.toString().length > 10) {
    res.send({
      status: false,
      data: [],
      message: "Enter Only 10 Character in phone Number",
    });
  }
  else if (!password) {
    res.send({
      status: false,
      data: [],
      message: "Enter Password",
    });
  } else if (!cpassword) {
    res.send({
      status: false,
      data: [],
      message: "Enter Confirm Password",
    });
  } else if (password != cpassword) {
    res.send({
      status: false,
      data: [],
      message: "Confirm Password does not match with Password",
    });
  }
  //   else if (password.length < 6) {
  //     res.send({
  //       status: false,
  //       data: [],
  //       message: "Please Enter 6 Character in Password",
  //     });
  //   }
  else {
    const result = await adminregister.insertMany({
      name,
      city,
      email,
      password,
      cpassword,
      phone,
      member_id: member_id,
    });
    if (result) {

      res.send({
        status: true,
        message: "Register Successful",
      });
    }
  }
});

module.exports = router;
