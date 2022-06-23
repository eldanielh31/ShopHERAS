const mongoose = require("mongoose");

const SuscriptionSchema = new mongoose.Schema(
    {
        mail: { type: String, require: true, unique: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Suscription", SuscriptionSchema);