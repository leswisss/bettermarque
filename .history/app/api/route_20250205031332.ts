import { NextApiRequest, NextApiResponse } from "next";

type Sg
export default async function submitHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({message: "Only post request are allowed"})
  }
}