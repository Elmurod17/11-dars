import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Thisn is my first server");
});

app.listen(process.env.PORT, () => {
  console.log(`App is running at port : ${process.env.PORT}`);
});
