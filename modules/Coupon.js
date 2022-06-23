const mongoose = require("mongoose");

const CouponSchema = new mongoose.Schema(
    {
        codename: { type: String, unique: true, require: true },
        discount: { type: Number, require: true },
        active: { type: Boolean, default: true }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Coupons", CouponSchema);