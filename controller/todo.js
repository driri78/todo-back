const fs = require("fs").promises;
const path = require("path");
const data = require("../model/todoData.json");
const getTodos = async (req, res) => {
  try {
    const jsonData = await fs.readFile(
      path.join(process.cwd() + "/model/todoData.json")
    );
    const data = await JSON.parse(jsonData);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
};

const saveTodos = async (req, res) => {
  const { todo } = req.body;
  try {
    await fs.writeFile(
      "/model/todoData.json",
      `module.exports = ${JSON.stringify(todo)}`
    );
    res.send({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getTodos, saveTodos };
