const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");

const PositionModel = mongoose.model("position", PositionsSchema);

module.exports = PositionModel;   // ✅ export directly
