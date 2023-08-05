const express = require("express");
const bycrypt = require("bcryptjs");
const Note = require("../models/News");
const config = require("../config/confidentila");
const getuset = require("../middleware/middl");
const my_secret_key = config.secret_key;
const nodemailer = require("nodemailer");
const jet_token = require("jsonwebtoken");
const router = express.Router();
const { query, validationResult, body } = require("express-validator");
const user = require("../models/User");

const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.email_user,
    pass: config.emai_password,
  },
});
//Add a user into our database
router.post(
  "/",
  body("username", "Enter a Valid Email").isEmail(),
  body("name", "Enter a valid name min length of 3").isLength({ min: 3 }),
  body("Pass_word", "Enter a valid Passoword min length of 8").isLength({
    min: 8,
  }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(404).json({ errors: errors.array() });
    } else {
      try {
        let use = await user.findOne({ Email: req.body.username });
        console.log(use);
        if (use) {
          success = false;
          res.status(404).json({
            success,
            Error: "Soory Username already exists ! Login instead",
          });
        } else {
          const salt = await bycrypt.genSalt(16);
          const passw = await bycrypt.hash(req.body.Pass_word, salt);
          const user1 = await user.create({
            name: req.body.name,
            Email: req.body.username,
            Password: passw,
          });
          const data = {
            user: {
              id: user.id,
            },
          };
          const authtoken = jet_token.sign(data, my_secret_key);
          success = true;
          const mailoptions = {
            from: "manojkumarsinghy20@gmail.com",
            to: `${req.body.username}`,
            subject: "Welcome to TaskHero - Your Ultimate Task Management App!",
            text: `Hello This is a random text and this is working by my express app`,
            html: `<p>Dear ${req.body.name} <br><br>Congratulations and a warm welcome to TaskHero, your new ultimate task management app! We are thrilled to have you join our growing community of productivity enthusiasts and look forward to supporting you in conquering your tasks and achieving your goals effortlessly. <br><br>Best regards<br>
            Sanjeev
            <br>
            The TaskHero Team 
            <br>
            P.S. Remember, with TaskHero by your side, you are the true hero of your tasks!</p>`,
          };
          transport.sendMail(mailoptions, (err, info) => {
            if (err) {
              res.json({ error: "Email not sent due to some conditions" });
            } else {
              console.log(info.response);
            }
          });
          res.json({
            success,
            authtoken: authtoken,
          });
        }
      } catch (error) {
        res.status(501).json({ errors: errors.array() });
      }
    }
  }
);

//Login User into Our portal

router.post(
  "/login",
  body("Email", "Enter a Valid Email").isEmail(),
  body("Password", "Password should not blank").exists(),
  async (req, res) => {
    const error = validationResult(req);
    success = false;
    if (!error.isEmpty()) {
      res.status(404).json({
        success,
        error: "Please Enter the details",
      });
    } else {
      try {
        const { Email, Password } = req.body;
        const use = await user.findOne({ Email });
        if (!use) {
          res.status(404).json({
            msg: "Please Enter Correct Login Details",
          });
        } else {
          const passw = await bycrypt.compare(Password, use.Password);
          if (!passw) {
            res.status(404).json({
              mag: "Please Enter Correct Login Details",
            });
          } else {
            const data = {
              user: {
                id: use.id,
              },
            };
            const authtoken = jet_token.sign(data, my_secret_key);
            success = true;
            res.json({
              success,
              authtoken: authtoken,
            });
          }
        }
      } catch (error) {
        res.status(401).send({ error: "Unauthecated User Found" });
      }
    }
  }
);

// This is route for logged in user
router.post("/authentication", getuset, async (req, res) => {
  try {
    const userid = req.User.id;

    const loggedUser = await user.findById(userid).select("-Password");
    let success = true;
    res.json({ success, loggedUser });
  } catch (error) {
    success = false;
    res.status(401).send({ success, error: "Unauthecated User Found" });
  }
});

//Adding a new Note
router.post(
  "/addnew",
  getuset,
  [body("title").isLength({ min: 3 })],
  async (req, res) => {
    const { title, description, tag } = req.body;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(404).json({
        error: "Please Enter the details",
      });
    } else {
      const note = new Note({
        title,
        description,
        tag,
        user: req.User.id,
      });
      const saveddata = await note.save();
      res.json(saveddata);
    }
  }
);

//Demo Sending Email to the user

router.post(
  "/verify",
  [body("User_Email", "Enter a valid Email").isEmail()],
  async (req, res) => {
    const { User_Email } = req.body;
    const OTP = Math.floor(Math.random() * (900000 - 100000)) + 100000;
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(404).json({ error: "Please Enter The Email" });
    } else {
      const mailoptions = {
        from: "manojkumarsinghy20@gmail.com",
        to: `${User_Email}`,
        subject: "Reset Your TextHero Password - OTP Verification Required",
        text: `Helllo`,
        html: `<p style="font-size:17px;">We hope you're doing well. This email is to help you reset your password for your TextHero web app account. To complete the password reset process, we have generated a one-time password (OTP) for verification purposes. Please find your OTP below:<br><br>
      <h1 style="text-align:center;">${OTP}</h1>
      <br><br>
      Please keep this OTP confidential and do not share it with anyone. The OTP is valid for a limited time only and can only be used once to verify your identity during the password reset process.
      <br>
      If you did not initiate this password reset request, or if you have any concerns about the security of your account, please contact our support team immediately at [support@textheroapp.com]. We take the security of our users' accounts seriously and will investigate any suspicious activity promptly.
      
       </p>`,
      };
      transport.sendMail(mailoptions, (err, info) => {
        if (err) {
          res.json({
            succes: false,
            error: "Mail Not sent There is an error in your code",
          });
        } else {
          res.json({ success: true, msg: OTP });
        }
      });
    }
  }
);

router.put(
  "/changed",
  body("User_email", "Please Re-enter Your Email").isEmail(),
  body("newpass", "Passsword Should be of 8 characters").isLength({ min: 3 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(404).json({ msg: "Please Enetr The Details" });
    } else {
      try {
        let users = await user.findOne({ Email: req.body.User_email });
        if (users) {
          const salt = await bycrypt.genSalt(16);
          const passw = await bycrypt.hash(req.body.newpass, salt);
          let newpass = await user.findOneAndUpdate(
            { Email: users.Email },
            {
              $set: {
                Password: `${passw}`,
              },
            }
          );
          res.json({ success: true });
          // res.json(users)
        } else {
          res.json({
            succes: false,
            msg: "This Email Doesn't Exists in any Profile! Please SignUp",
          });
        }
      } catch (error) {
        res.json({
          error: "Some Internal Error Occured Please Try again Later",
        });
      }
    }
  }
);
module.exports = router;
