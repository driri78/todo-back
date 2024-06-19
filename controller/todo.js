const fs = require("fs").promises;
const data = require("../model/todoData.json");
const getTodos = async (req, res) => {
  res.send(data);
};

const saveTodos = async (req, res) => {
  const { todo } = req.body;
  try {
    await fs.writeFile("./model/todoData.json", JSON.stringify(todo));
    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTodos, saveTodos };
