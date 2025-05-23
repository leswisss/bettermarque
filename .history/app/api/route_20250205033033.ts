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
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ]
    });

    const sheets = google.sheets({
      auth,
      version: "v4"
    })

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        
      }
    })

  }catch(e){

  }
}
