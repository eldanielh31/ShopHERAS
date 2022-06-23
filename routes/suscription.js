const router = require("express").Router();
const { response } = require("express");
const Suscription = require("../modules/Suscription");
const { verifyTokenAndAdmi } = require("../routes/verifyToken");

router.use(async function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

//CREATE

router.post("/", async (req, res) => {
    const newSuscription = new Suscription(req.body);
    try {
        const savedSuscription = await newSuscription.save();
        res.status(200).json(savedSuscription);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//DELETE
router.delete("/:mail", verifyTokenAndAdmi, async (req, res) => {
    try {
        await Suscription.findOneAndDelete({ mail : req.params.mail });
        res.status(200).json("Suscripcion eliminada.")
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/:mail", async (req, res) => {
    try {
        const findedSuscription = await Suscription.findOne({ mail: req.params.mail });
        res.status(200).json(findedSuscription);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//GET ALL
router.get("/", async (req, res) => {
    try {
        const Suscriptions = await Suscription.find();
        res.status(200).json(Suscriptions);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;