const jwt = require("jsonwebtoken");

module.exports.checkAuth = async (req,res)=> {
    const {name, password} = req.body;
    if(name == process.env.AUTH_NAME && password == process.env.AUTH_PASSWORD){
        const token = jwt.sign({name, password}, process.env.JWT_SECRET)
        res.cookie("session_token", token, {
            maxAge: 8 * 60 * 60 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Strict", 
        });        
        return res.status(200).json({ message: "Authenticated!", status: 200 })
    }
    return res.status(401).json({ message: "Not Authenticated!", status: 401 })
}

module.exports.logOut = async (req, res) => {
    
    res.cookie("session_token", "", {
        expires: new Date(0),  
        httpOnly: true,         
        sameSite: "Strict",     
    });

    return res.status(200).redirect("/auth");
};
