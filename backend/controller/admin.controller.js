const client = require('../sanity/sanity.client')

module.exports.getOrders = async (req, res) => {
    try {
        const data = await client.fetch(`*[_type=="order"]`)
        res.send(JSON.stringify(data))
    } catch (error) {
        res.send(JSON.stringify(error.message))
    }
}

module.exports.orderPackages = async (req, res) => {
    const body = await req.body
    console.log("fdsfsdfsdfsdfsdf: ",body);
    res.send(JSON.stringify("fsdf"))
}