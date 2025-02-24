import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  fullname: string;
  companyemail: string;
  companyname: string;
  companywebsite?: string;
  projectscope: string;
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    //prepare authentication
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:E1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.fullname,
            body.companyemail,
            body.companyname,
            body.companywebsite,
            body.projectscope,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    if (e instanceof Error) {
      return res.status(500).send({ message: e.message });
    }
    return res.status(500).send({ message: "Something went wrong" });
  }
}

// import { google } from "googleapis";

// // Define your type for clarity
// type SheetForm = {
//   fullname: string;
//   companyemail: string;
//   companyname: string;
//   companywebsite?: string;
//   projectscope: string;
// };

// export async function POST(request: Request) {
//   try {
//     // Parse the JSON body from the incoming request
//     const body: SheetForm = await request.json();

//     // Prepare authentication with Google
//     const auth = new google.auth.GoogleAuth({
//       credentials: {
//         client_email: process.env.GOOGLE_CLIENT_EMAIL,
//         private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
//       },
//       scopes: [
//         "https://www.googleapis.com/auth/spreadsheets",
//       ],
//     });

//     const sheets = google.sheets({
//       auth,
//       version: "v4",
//     });

//     // Append values to your Google Sheet
//     const response = await sheets.spreadsheets.values.append({
//       spreadsheetId: process.env.GOOGLE_SHEET_ID,
//       range: "A1:E1",
//       valueInputOption: "USER_ENTERED",
//       requestBody: {
//         values: [
//           [
//             body.fullname,
//             body.companyemail,
//             body.companyname,
//             body.companywebsite || "",
//             body.projectscope,
//           ],
//         ],
//       },
//     });

//     // Return a successful response with JSON
//     return new Response(JSON.stringify({ data: response.data }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e) {
//     const errorMessage =
//       e instanceof Error ? e.message : "Something went wrong";
//     return new Response(JSON.stringify({ message: errorMessage }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
