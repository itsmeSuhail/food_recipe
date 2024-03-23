import { Schema, model } from "mongoose"
const recipeSchema = new Schema({
	title: String,
	category: String,
	description: String,
	userId: String,
	images: []
});
export default model("Recipe", recipeSchema);