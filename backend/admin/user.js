const router = require("express").Router();
const user = require("../model/register");

router.post('/getuser', async (req, res) => {
    const result = await user.find();
    if (result.length) {
        res.json({
            status: true,
            message: "Data get successfully",
            data: result.map((data) => {
                return {
                    name: data.name,
                    city: data.city,
                    email: data.email,
                    password: data.password,
                    cpassword: data.cpassword,
                    phone: data.phone,
                    created_date: (data.created_date).getDate() + "-" + Number((data.created_date).getMonth() + 1) + "-" + (data.created_date).getFullYear(),
                }
            })
        })
    }
    else {
        res.send({
            status: false,
            message: "something went wrong"
        })
    }
})

module.exports = router;