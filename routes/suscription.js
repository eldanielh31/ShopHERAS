const router = require("express").Router();
const Suscription = require("../modules/Suscription")
const { verifyTokenAndAuthorization, verifyTokenAndAdmi } = require("../routes/verifyToken");

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
router.delete("/:id", verifyTokenAndAdmi, async (req, res) => {
    try {
        await Suscription.findByIdAndDelete(req.params.id);
        res.status(200).json("Suscripción eliminada.")
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/:id", async (req, res) => {
    try {
        const findedProduct = await Suscription.findOne(req.params.mail);
        res.status(200).json(findedProduct);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});
//GET ALL PRODUCTS
router.get("/", async (req, res) => {

    try {
        suscriptions = await Suscription.find();
        res.status(200).json(suscriptions);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;