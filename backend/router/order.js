const router = require("express").Router();
const order = require("../model/order");

router.post("/order", async (req, res) => {
  const { name, email, phone, city, event_date, event_category, event_item,
    //  card_number, holder_name, card_cvv,  card_expiry_date,  price
  } = req.body;
  if (!name || !email || !phone || !city || !event_date || !event_category || !event_item
    //  !card_number || !holder_name || !card_cvv || !card_expiry_date || !price
  ) {
    res.send({
      status: false,
      message: "Please fill require Feild",
    });
  } else {
    const data = await order.insertMany({
      name,
      email,
      phone,
      city,
      event_date,
      event_category,
      event_item,
      // card_number,
      // holder_name,
      // card_cvv,
      // card_expiry_date,
      // price 
    });
    res.send({
      status: true,
      message: "Your Data Fill Successfully",
      data: data,
    });
  }
});

router.post('/getorder', async (req, res) => {
  const result = await order.find({});
  // console.log(result, "order");
  res.send({
    status: true,
    message: "data Get",
    data: result.map((data) => {
      return {
        name: data.name,
        email: data.email,
        phone: data.phone,
        city: data.city,
        event_date: (data.event_date).getDate() + "-" + Number((data.event_date).getMonth() + 1) + "-" + (data.event_date ).getFullYear(),
        event_category: data.event_category,
        event_item: data.event_item
      }
    })
  })
})

module.exports = router;
