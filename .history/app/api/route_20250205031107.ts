import { NextApiRequest, NextApiResponse } from "next";

export default async function submitHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send( body: {message: })
  }
}