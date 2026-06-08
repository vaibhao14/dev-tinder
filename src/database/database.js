const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://namastedev:VabXe2oaU9fuckl0@namastenode.3c4maf6.mongodb.net/devTinderDB");
    } catch(error) {    
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = {
    connectDB
};
