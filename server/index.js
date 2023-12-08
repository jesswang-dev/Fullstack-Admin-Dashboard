import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import dashboardRoutes from "./routes/dashboard.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* ROUTES */
app.use("/dashboard", dashboardRoutes);


/* ERROR HANDLING */
//handle unknown route
app.use("*", (req, res) => {
  res.status(404).json({ errMessage: "Page not found" });
});

//handle global error
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
});

/* MONGOOSE SETUP*/
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.MONGO_URL).then(()=> {
    app.listen(PORT, () => console.log(`Listening to port ${PORT}`))
}).catch((error) => {
    console.log(`${error} did not connect`)
})

