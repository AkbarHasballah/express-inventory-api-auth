import rateLimit from "express-rate-limit";

export const  apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 100,
    message:{
        status: 429,
        message: "Too many requests, please try again later."
    }, // limit each IP to 100 requests per windowMs
    standardHeaders:true,
    legacyHeaders:false
});