import {Router} from "express";
import {validateSchema} from "../middlewares/schemaValidator.js"
import {signIn, signUp} from "../controllers/auth.controller.js";
import { loginSchema,signUpSchema } from "../schemas/authSchema.js";
const authRouter=Router();

authRouter.post("/signIn", validateSchema(loginSchema), signIn);
authRouter.post("/signUp", validateSchema(signUpSchema),signUp);

export default authRouter;


