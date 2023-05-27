import { NextApiRequest, NextApiResponse } from "next";
import { connectMongo } from "@/utils/connectMongo";
import { Movie } from "@/models/movies";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // console.log(req.method);

    if (req.method === "POST") {
      await connectMongo();
      const details = JSON.parse(req.body);
      const movies = await Movie.find({ name: details.name });

      if (movies) {
        let viewCount = Number(movies[0].views);
        let updatedView = viewCount + 1;
        console.log(updatedView);

        const response = await Movie.updateOne(
          { name: details.name },
          { $set: { views: updatedView } }
        );
        console.log(response);

        res.status(200).json({ message: response });
      } else {
        res.status(404).json({ message: "Movie Not Found" });
      }
    }
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: error });
  }
}

// res.status(200).json({ message: "Sucess" })
