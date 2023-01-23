const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require("uuid");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


let workoutCategories = [
  {
    Categoryid: uuid(),
    categoryName: "Chest",
    workouts: [
      {
        workoutID: uuid(),
        workoutName: "Bench Press",
        description:
          "a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward using either a barbell or a pair of dumbbells. During a bench press, you lower the weight down to chest level and then press upwards while extending your arms.",
      },
      {
        workoutID: uuid(),
        workoutName: "Dumbbell Flyes",
        description:
          "a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward using either a barbell or a pair of dumbbells. During a bench press, you lower the weight down to chest level and then press upwards while extending your arms.",
      },
      {
        workoutID: uuid(),
        workoutName: "Push-up",
        description:
          "a compound exercise that targets the muscles of the upper body. It involves lying on a bench and pressing weight upward using either a barbell or a pair of dumbbells. During a bench press, you lower the weight down to chest level and then press upwards while extending your arms.",
      },
    ],
  },
  {
    Categoryid: uuid(),
    categoryName: "Legs",
    workouts: [
      {
        workoutID: uuid(),
        workoutName: "Squat",
        description:
          "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up.",
      },
      {
        workoutID: uuid(),
        workoutName: "Leg Press",
        description:
          "Leg presses are done in a seated position. Your legs repeatedly press against weights, which can be adjusted according to your fitness level.",
      },
      {
        workoutID: uuid(),
        workoutName: "Deadlift",
        description:
          "The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor.",
      },
    ],
  },
];

let workoutCategoryNames = [];

function addCategory() {
  for (let i = 0; i < workoutCategories.length; i++) {
    workoutCategoryNames.push(workoutCategories[i].categoryName);
  }
}
addCategory();

const findWorkoutCategory = (cat) => {
  for (let i = 0; i < workoutCategoryNames.length; i++) {
    if (workoutCategories[i].categoryName.toLowerCase() == cat) {
      return workoutCategories[i];
    }
  }
};

const findWorkoutID = (workoutCategory, id) => {
  for (let i = 0; i < workoutCategory.workouts.length; i++) {
    if (workoutCategory.workouts[i].workoutID == id) {
      return workoutCategory.workouts[i]
    }
  }
};

app.get("/", (req, res) => {
  res.render("home", { workoutCategories, workoutCategoryNames });
});

app.get("/workouts/:category", (req, res) => {
  const { category } = req.params;
  const workoutCategory = findWorkoutCategory(category);
  res.render("workout_list", { workoutCategory });
});

app.post("/workouts/:category", (req, res) => {
  const { category } = req.params;
  const { workoutName, description } = req.body;
  for(let i = 0; i < workoutCategories.length; i++) {
    if (workoutCategories[i].categoryName.toLowerCase() == category) {
      workoutCategories[i].workouts.push({ workoutID: uuid(), workoutName, description})
    }
  }
  res.redirect(`/workouts/${category}`)
})

app.get("/workouts/:category/add", (req, res) => {
  const { category } = req.params;
  const workoutCategory = findWorkoutCategory(category);
  res.render('add_workout', { workoutCategory })
})

app.get("/workouts/:category/:id", (req, res) => {
  const { id, category } = req.params;
  const workoutCategory = findWorkoutCategory(category);
  const workout = findWorkoutID(workoutCategory, id);
  res.render("workout", { workoutCategory, workout });
});

app.delete('/workouts/:category/:id', (req, res) => {
  const { id, category } = req.params;
  const workoutCategory = findWorkoutCategory(category);
  const workout = findWorkoutID(workoutCategory, id);
  for(let i = 0; i < workoutCategories.length; i++) {
    for(let j = 0; j < workoutCategories[i].workouts.length; j++) {
      if(workoutCategories[i].workouts[j].workoutID == workout.workoutID) {
        workoutCategories[i].workouts.splice(j, 1)
      }
    }
  }
  res.redirect(`/workouts/${category}`)
})

app.listen(3010, () => {
  console.log("ON PORT 3010!");
});