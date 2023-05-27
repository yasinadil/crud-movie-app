import mongoose from "mongoose";
const connectMongo = () => {
  return mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL!);
};

export { connectMongo };
