const path =require("path")

const fileName = (page) => path.resolve(__dirname, '../ejs-views', `${page}.ejs`)


module.exports = fileName