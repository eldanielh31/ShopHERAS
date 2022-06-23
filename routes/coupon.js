const router = require("express").Router();
const { response } = require("express");
const Coupon = require("../modules/Coupon");
const { verifyTokenAndAdmi } = require("./verifyToken");

router.use(async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//CREATE

router.post("/", async (req, res) => {
    const newCoupon = new Coupon(req.body);
    try {
        const savedCoupon = await newCoupon.save();
        res.status(200).json(savedCoupon);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//DELETE
router.delete("/:codename", async (req, res) => {
    try {
        await Coupon.findOneAndDelete({ codename: req.params.codename });
        res.status(200).json("Cupon eliminado.")
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/:codename", async (req, res) => {
    try {
        const findedCoupon = await Coupon.findOne({ codename: req.params.codename });
        res.status(200).json(findedCoupon);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    try {
        const Coupons = await Coupon.find();
        res.status(200).json(Coupons);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;