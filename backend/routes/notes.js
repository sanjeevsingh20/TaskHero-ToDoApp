const Note = require("../models/News");
const express = require("express");
const getuset = require("../middleware/middl");
const { query, validationResult, body } = require("express-validator");

const router = express.Router();

router.get("/fetchalldata", getuset, async (req, res) => {
  // const last=[];

  const data = await Note.find({ user: req.User.id });
  res.json(data);
  // for(let i =0; i<data.length;i++){
  //     last.push(data[i].title)
  // }
  // res.json(last)
});

router.post(
  "/addNew",
  body("title").isLength({ min: 3 }),
  body("description").isLength({ min: 8 }),
  getuset,
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(404).json({ error: error.array() });
    }
    try {
      const note = new Note({
        title: req.body.title,
        description: req.body.description,
        tag: req.body.tag,
        user: req.User.id,
      });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      res.status(401).json({ error: "Yha bhi hai" });
    }
  }
);

router.put("/updatenotes/:id", getuset, async (req, res) => {
  const { title, description, tag } = req.body;
  const newnote = {};

  if (title) {
    newnote.title = title;
  }
  if (description) {
    newnote.description = description;
  }
  if (tag) {
    newnote.tag = tag;
  }

  let note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.User.id) {
    res.status(401).json({ Invalid: "Unauthorized user" });
  } else {
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newnote },
      { new: true }
    );
    res.json(note);
  }
});
router.delete("/deleteNote/:id", getuset, async (req, res) => {
  let note = await Note.findById(req.params.id);
  if (!note) {
    res.status(404).json({ error: "No Data Found" });
  }
  try {
    if (note.user.toString() !== req.User.id) {
      res.status(401).json({ Invalid: "Unauthorized user" });
    } else {
      note = await Note.findByIdAndDelete(req.params.id);
      res.json(note);
    }
  } catch (error) {
    res.status(401);
  }
});
module.exports = router;
