import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;

const _dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
})

app.listen(PORT, () => {
    console.log("Server Started at http://localhost:" + PORT);
})