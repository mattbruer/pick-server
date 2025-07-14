import mongoose from "mongoose"

const dbInit = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((err) => console.log("Could not connect to MongoDB Atlas:", err))
}

export { dbInit }
