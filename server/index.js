import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import { connectDb } from "./utils/ConnectDb.js"
import authRouter from "./route/auth.js";
import recipeRouter from './route/recipe.js'
dotenv.config();
const port = 3001;
const app = express();
const key = process.env.mongoURL;
console.log(key)
connectDb(key);
app.use(cors({
	origin: "http://localhost:4200", credentials: true
}));
app.use(cookieParser());
app.use(express.json());
// app.use("/api/v1/auth", authRouter);
app.post("/", (req, res) => {
	console.log(req.body);
	res.json({ message: "created" })
})
app.get("/", (req, res) => {
	res.json({ message: "getall" })
})
app.put("/:id", (req, res) => {
	const { id } = req.params;
	console.log(req.body, id);
	res.json({ message: "updated" })
})
app.delete("/:id", (req, res) => {
	const { id } = req.params;
	console.log(req.body, id);
	res.json({ message: "deleted" })
})
app.get("/:id", (req, res) => {
	const { id } = req.params;
	console.log(req.body, id);
	res.json({ message: "get" })
})
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/recipe", recipeRouter);
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
})