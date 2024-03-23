import express from "express"
import authModel from "../model/auth.model.js";
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const data = await authModel.create({ name, email, password });
		res.status(200).json({
			message: "user account created..."
		})
	} catch (error) {
		res.status(500).json({
			message: "something went wrong...",
			e: error.message
		})
	}
})
authRouter.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		const data = await authModel.findOne({ email });

		if (!data) return res.status(404).json({ message: "email does not found..." });
		if (data.password !== password) return res.status(404).json({ message: "password does not match..." });
		res.status(200).json({
			id: data.id,
			message: "user account found..."
		})
	} catch (error) {
		res.status(500).json({
			message: "user does not exist"
		})
	}
})
authRouter.get("/:id",async(req,res)=>{
	const {id}=req.params;
	try {
		const data=await authModel.findById(id);
		res.status(200).json(data);
	} catch (error) {
		res.status(500).json({message:"something went wrong"})
	}
})
export default authRouter;