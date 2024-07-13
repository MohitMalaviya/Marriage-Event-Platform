const router = require("express").Router();
const register = require('../model/register');

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        let user = await register.find({ email: email }, { email: 1, password: 1, member_id: 1 });
        if (user.length) {
            if (user[0].password == password) {
                res.send({
                    status: true,
                    message: "Login Successful",
                    member_id: user[0].member_id
                });
            }
            else {
                res.send({
                    status: false,
                    data:[],
                    message: "Wrong password"
                })
            }
        }
        else {
            res.json({
                status: false,
                data:[],
                message: "Somthing Wrong"
            });
        }
    }
    else {
        res.json({
            status: false,
            data:[],
            message: "Please Fill Required Field"
        });
    }
})

module.exports = router;