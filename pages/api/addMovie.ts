import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "@/utils/connectMongo";
import { Movie } from "@/models/movies";
import { revalidatePath } from "next/cache";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const details = JSON.parse(req.body);

      if (!details.name || !details.genre) {
        res.status(429).json({ message: "Not enough information" });
      }
      await connectMongo();
      const movieDetails = {
        name: details.name,
        genre: details.genre,
        rating: 0,
        views: 0,
      };
      console.log(movieDetails);

      const movie = new Movie(movieDetails);
      await movie.save();

      res.status(200).json({ message: "Success" });
    }
  } catch (error) {
    console.log(error);

    res.status(429).json({ message: error });
  }
}
