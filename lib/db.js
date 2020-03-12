const mysql = require("serverless-mysql");

const db = mysql({
    host: process.env.WP_HOST,
    database: process.env.WP_DATABASE,
    user: process.env.WP_USERNAME,
    password: process.env.WP_USERNAME
});

exports.query = async query => {
    try {
        const results = await db.query(query);
        console.log("Database queried...");
        await db.end()
        return results
    } catch (error) {
        return { error }
    }
}