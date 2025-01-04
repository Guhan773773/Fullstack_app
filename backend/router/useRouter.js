import express from "express"
const userRouter = express.Router();
import {fetch,create} from "../controller/userController.js"


userRouter.get('/fetch',fetch);
userRouter.post('/create',create);
export default userRouter;