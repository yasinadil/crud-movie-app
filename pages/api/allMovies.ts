import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "@/utils/connectMongo";
import { Movie } from "@/models/movies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.method);

    if (req.method === "GET") {
      await connectMongo();
      const movies = await Movie.find({});
      console.log(movies);

      if (movies) {
        res.status(200).json({ movies: movies });
      } else {
        res.status(404).json({ movies: "" });
      }
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: error });
  }
}

// res.status(200).json({ message: "Sucess" })
