const fs = require("fs").promises;

const getTodos = async (req, res) => {
  try {
    const jsonData = await fs.readFile("./model/todoData.json", "utf8");
    const data = await JSON.parse(jsonData);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
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
