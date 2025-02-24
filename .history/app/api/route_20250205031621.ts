import { NextApiRequest, NextApiResponse } from "next";

type SheetForm = {
  fullname: string;
  email: string;
  name: string;
  website?: string;
  scope: string;
};

export default async function submitHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request are allowed" });
  }

  const body = req.body as SheetForm

  try{
    
  }
}
