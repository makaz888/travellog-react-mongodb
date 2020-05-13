const { Router } = require("express");

const LogEntry = require(`../models/LogEntry`);

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
    //res.json({ aaa: "aaa" });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    console.log("aaa");
    const createdEntry = await logEntry.save();
    console.log("bbb");
    res.json(createdEntry);
    console.log("ccc");
  } catch (error) {
    console.log("ddd");
    if (error.name === "ValidationError") {
      res.status(422);
    }

    next(error);
  }
});

module.exports = router;
