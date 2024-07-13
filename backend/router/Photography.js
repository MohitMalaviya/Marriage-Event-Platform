const router = require("express").Router();
const Photography = require("../model/Photography");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
    },
});

//Calling the "multer" Function
const upload = multer({
    storage: multerStorage,
}).single("p_img");

router.post("/addphotography", upload, async (req, res) => {
    const is_check = await Photography.find().sort({ _id: -1 }).limit(1)
    console.log(is_check[0]);
    const id = is_check.length ? is_check[0].p_id.slice(1) : 0
    const p_id = "P" + (Number(id) + 1)
    const { p_img, p_name, city, price, rating, review } = req.body;
    if (
        !req.file ||
        !p_name ||
        !city ||
        !price ||
        !rating ||
        !review
    ) {
        res.send({
            status: false,
            message: "Fill Require Feild",
        });
    } else {
        const data = await Photography.insertMany({
            p_img: req.file.filename,
            p_name,
            city,
            price,
            rating,
            review,
            p_id: p_id

        });
        if (data) {
            await sharp(req.file.path)
                .resize(300, 300)

                .toFile(
                    path.resolve(req.file.destination, `300x300_${req.file.filename}`)
                )

            res.send({
                status: true,
                message: "Data Inserted Successfully",
                data: data,
            });
        }
    }
});
router.post('/getPhotography', async (req, res) => {
    const result = await Photography.find();
    if (result.length) {
        res.json({
            status: true,
            message: "Data get successfully",
            data: result.map((data) => {
                return {
                    p_id: data.p_id,

                    p_name: data.p_name,
                    designerby: data.designerby,
                    city: data.city,
                    price: data.price,
                    rating: data.rating,
                    review: data.review,
                    p_img: `http://localhost:5000/upload/300x300_${data.p_img}`
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

router.post('/getphotobyid', async (req, res) => {
    const { p_id } = req.body
    if (!p_id) {
        res.send({
            status: false,
            message: "Enter Product ID"
        })
    }
    else {
        const result = await Photography.find({ p_id: p_id });
        if (result.length) {
            res.json({
                status: true,
                message: "Data get successfully",
                data: result.map((data) => {
                    return {
                        p_name: data.p_name,
                        // designerby: data.designerby,
                        city: data.city,
                        price: data.price,
                        rating: data.rating,
                        review: data.review,
                        p_img: `http://localhost:5000/upload/300x300_${data.p_img}`
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
    }
})

router.post("/updatephotography", upload, async (req, res) => {
    // const is_check = await Photography.find().sort({ _id: -1 }).limit(1)
    // const id = is_check.length ? is_check[0].p_id.slice(1) : 0
    // const p_id = "P" + (Number(id) + 1)
    const { p_img, p_name, city, price, rating, review, p_id } = req.body;
    if (!p_id) {
        res.send({
            status: false,
            message: "Enter Product ID"
        })
    }
    else {
        if (
            !req.file ||
            !p_name ||
            !city ||
            !price ||
            !rating ||
            !review
        ) {
            res.send({
                status: false,
                message: "Fill Require Feild",
            });
        } else {
            await Photography.updateOne({
                p_id: p_id
            }, {
                $set: {
                    p_img: req.file.filename,
                    p_name: req.body.p_name,
                    city: req.body.city,
                    price: req.body.price,
                    rating: req.body.rating,
                    review: req.body.review,
                }
            });
            await sharp(req.file.path)
                .resize(300, 300)

                .toFile(
                    path.resolve(req.file.destination, `300x300_${req.file.filename}`)
                )

            res.send({
                status: true,
                message: "Data Updated Successfully"
            });
        }
    }
});

router.delete('/deletephotography', async (req, res) => {
    const { p_id } = req.body
    if (!p_id) {
        res.send({
            status: false,
            message: "Enter Product ID"
        })
    }
    else {
        const result = await Photography.find({ p_id: p_id });
        if (result.length) {
            await Photography.deleteMany({ p_id: p_id });
            res.json({
                status: true,
                message: "Product Deleted Successfully"
            })
        }
        else {
            res.send({
                status: false,
                message: "something went wrong"
            })
        }
    }
})

module.exports = router;