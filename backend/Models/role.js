const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    id: { type: String, required: true, unique:true },
    roleName: { type: String, required:true },
    description: { type: String}
});

module.exports = mongoose.model("Role", roleSchema);