const dotenv = require("dotenv")
dotenv.config()
const sanity = require("sanity");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

module.exports.SanityConfig = sanity.defineConfig({
    name: "n8x",
    title: "shop nike",
    projectId,
    dataset,
    token,
    basePath: "/studio",
})