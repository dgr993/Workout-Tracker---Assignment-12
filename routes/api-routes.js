const router = require("express").Router();
const workouts = require("../models").workouts;

router.post("/api/workouts", ({ body }, res) => {
  workouts.create(body)
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    workouts.findByIdAndUpdate(params.id,{$push: {exercises: body}})
      .then(dbworkouts => {
        res.json(dbworkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

router.get("/api/workouts", (req, res) => {
  workouts.find({})
    .sort({ date: -1 })
    .then(dbworkouts => {
      res.json(dbworkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;