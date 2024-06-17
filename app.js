const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 4500);

app.use(cors());
app.use(express.json()); // json 형태
app.use(express.urlencoded({ extended: false })); // form데이터

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use("/todo", require("./routes/todo"));

app.listen(app.get("port"), () => {
  console.log(`${app.get("port")}번포트에서 실행중...`);
});
