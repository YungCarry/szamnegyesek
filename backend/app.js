const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const PORT = 3001;

app.use(express.json());

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Four = sequelize.define(
  "Four",
  {
    numbers: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isFourNumbers(value) {
          const numbers = value.split(",").map(Number);
          if (numbers.length !== 4) {
            throw new Error("Invalid data");
          }
        },
      },
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["numbers"],
      },
    ],
  }
);

sequelize.sync();

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/fours", async (req, res) => {
  const fours = await Four.findAll();
  res.json(fours);
});

app.get("/fours/:id", async (req, res) => {
  const id = req.params.id;
  const four = await Four.findByPk(id);
  if (four) {
    res.json(four);
  } else {
    res.status(404).send("Not found");
  }
});

app.post("/fours", async (req, res) => {
  const numbers = req.body.numbers;
  if (!Array.isArray(numbers) || numbers.length !== 4) {
    return res.status(400).send("Invalid data");
  }
  try {
    const newFour = await Four.create({ numbers: numbers.join(",") });
    res.status(201).json(newFour);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      res.status(400).send("Duplicate entry");
    } else {
      res.status(400).send(error.message);
    }
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
