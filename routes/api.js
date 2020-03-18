const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", function(req, res)  {
    Workout.find()
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
      });
});

// router.delete("api/workout")
router.delete("/api/workout", function({ body }, res)  {
  Workout.findByIdAndDelete(body)
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});


router.put("/api/workouts/:id", function(req, res)  {
    Workout.findByIdAndUpdate({_id:req.params.id},{
        $push: {exercises: req.body}
    })
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
      });
})

router.get("/api/workouts/:id", (req, res)  => {
    Workout.find({})
     .sort({ date: -1 })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

module.exports = router;
