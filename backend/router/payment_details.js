const router = require("express").Router();
const payment_details = require('../model/payment_details')

router.post("/paymentdetails", async (req, res) => {
    const { card_number, holder_name, card_cvv, card_expiry_date, price } = req.body;
    if (!card_number || !holder_name || !card_cvv || !card_expiry_date || !price) {
        res.send({
            status: false,
            message: "Please fill require Feild",
        });
    } else {
        const data = await payment_details.insertMany({
            card_number,
            holder_name,
            card_cvv,
            card_expiry_date,
            price
        });
        res.send({
            status: true,
            message: "Payment Successfully",
            data: data,
        });
    }
});

router.post('/getpaymentdetails', async (req, res) => {
    const result = await payment_details.find({});
    // console.log(result, "paymentdetails");
    res.send({
        status: true,
        message: "data Get",
        data: result.map((data) => {
            return {
                holder_name: data.holder_name,
                card_number: data.card_number,
                card_cvv: data.card_cvv,
                card_expiry_date: (data.card_expiry_date).getDate() + "-" + Number((data.card_expiry_date).getMonth() + 1) + "-" + (data.card_expiry_date ).getFullYear(),
                price: data.price
            }
        })
    })
})

module.exports = router;
