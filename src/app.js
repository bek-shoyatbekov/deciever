import express from "express";
import morgan from "morgan";




const app = express();




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.use(morgan("common"));




app.get("/", (req, res, next) => {
    res.status(200).send("Working...");
    return;
})












export default app;