import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { fromEmail, toEmail } from '../../utils/constants/constants';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { body } = req;
    const { name, email, message } = JSON.parse(body);

    await sendgrid.send({
      to: `${toEmail}`,
      from: `${fromEmail}`,
      subject: `ganymede.bio contact from: ${name}`,
      text: `${message}`,
      html: `<h3>Name: ${name}, Email: ${email}</h3>
      <div>
        ${message.replace(/rn/g, '<br>')}
      </div>`,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
