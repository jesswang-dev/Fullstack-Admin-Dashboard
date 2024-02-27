import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpis.js";
import KPI from "./models/KPI.js";
import { kpis } from "./data/AnalyticsData.js";

/*Config */
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* ROUTES */
app.use("/kpi", kpiRoutes);


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

mongoose.connect(process.env.MONGO_URL).then(async ()=> {
    app.listen(PORT, () => console.log(`Listening to server port ${PORT}`))
    /**Add kpi data into database */
    // KPI.insertMany(kpis);
}).catch((error) => {
    console.log(`${error} did not connect`)
})

