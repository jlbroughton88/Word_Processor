const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// Add post
module.exports = async (req, res) => {
    const docu = await db.query(escape``);
    res.status(200).json(docu);
}