require("dotenv").config();
const {createClient} = require("@sanity/client");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

if (!projectId || !dataset || !token) {
    console.error("Missing required environment variables.");
    throw new Error("Sanity configuration error");
}

const client = createClient({
    projectId,
    dataset,
    useCdn: false,
    token,
    apiVersion: "2024-12-25",
});

module.exports = client;