import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/", {
            dbName: "next",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't connect to Mongo");
    }
};
export default connect;
