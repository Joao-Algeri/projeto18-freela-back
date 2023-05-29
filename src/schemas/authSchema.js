import joi from "joi";

export const loginSchema=joi.object({
    email:joi.string().required().email(),
    password:joi.string().required().min(6)

})

 export const signUpSchema=joi.object({
    name:joi.string().min(3).max(45).required(),
    email:joi.string().email().required(),
    url:joi.string().required(),
    bio:joi.string().min(1).required(),
    password:joi.string().valid(joi.ref("password")).required()
});