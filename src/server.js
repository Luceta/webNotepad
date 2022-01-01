import express from "express";
import { getMain, saveNote } from "./controllers/noteController";
import "dotenv/config";
import "./db";

const app = express();
const PORT = process.env.PORT;

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", getMain);
app.post("/create", saveNote);

const handleListen = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListen);
