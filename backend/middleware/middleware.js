const jwt = require("jsonwebtoken")

module.exports.authenticate = async (req, res, next) => {
    const token = req.cookies.session_token;
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized: Authentication required" });
    }
    
    try {
        const verify = jwt.verify(token, process.env.JWT_SECRET)
        if(verify.name != process.env.AUTH_NAME || verify.password != process.env.AUTH_PASSWORD){
            throw new Error("Something is sus!")
        }
        next();
    } catch (error) {
        console.log("error at auth middleware: ", error);
        return res.status(500).json({message: "something went wrong", error})
    }
};
