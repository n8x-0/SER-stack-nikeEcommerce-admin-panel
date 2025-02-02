const express = require("express")
const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Hellllooo bro, go the the api/test/users for test users")
})

router.get("/test/users", (req, res) => {
    const users = [
        {
            name: 'Jennie Nichols',
            email: '[email protected]',
            image: 'https://randomuser.me/api/portraits/women/75.jpg'
        },
        {
            name: 'John Doe',
            email: '[email protected]',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Jane Smith',
            email: '[email protected]',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            name: 'Robert Brown',
            email: '[email protected]',
            image: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            name: 'Emily Davis',
            email: '[email protected]',
            image: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        {
            name: 'Michael Wilson',
            email: '[email protected]',
            image: 'https://randomuser.me/api/portraits/men/5.jpg'
        }
    ];

    res.send(users)
})

module.exports = router