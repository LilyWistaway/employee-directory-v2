gitimport express from "express";
import employeesRouter from "./routes/employees.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

app.use((err, req, res, next) => {
  res.sendStatus(500);
});

export default app;
