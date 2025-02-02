require("dotenv").config()
const nextsanity = require("next-sanity");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

if(!projectId || !dataset || !token){
    console.log("env variabels are missing");
    throw new Error("Something went wrong")
}

const clientConf = {
    projectId,
    dataset,
    useCdn: false,
    token,
    apiVersion:'2024-12-25',
}

const client = nextsanity.createClient(clientConf)
module.exports = client