import express from "express"
import recipeModel from "../model/recipe.model.js";
const recipeRouter = express.Router();
recipeRouter.post("/", async (req, res) => {
	const { category, description, title, images, userId } = req.body;
	console.log(req.headers.authorization);
	const data = await recipeModel.create({
		title, category, description, images, userId
	})
	res.status(201).json(data);
})
recipeRouter.get("/", async (req, res) => {
	const data = await recipeModel.find()
	res.status(201).json(data);
})
recipeRouter.delete("/:id", async (req, res) => {
	const {id}=req.params;
	try {
		const data = await recipeModel.findByIdAndDelete(id);
	res.status(201).json(data);
	} catch (error) {
		res.status(500).json({message:"unable to delete"});
	}
})
recipeRouter.put("/:id", async (req, res) => {
	const {id}=req.params;
	try {
		const data = await recipeModel.findByIdAndUpdate(id,{$set:req.body},{new:true});
	res.status(201).json(data);
	} catch (error) {
		res.status(500).json({message:"unable to delete"});
	}
})
export default recipeRouter;