import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

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
    //prepare authentication
    const auth = new google.auth.GoogleAuth({
      credentials
    })

  }catch(e){

  }
}
