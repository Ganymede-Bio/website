import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { name, email, phone, message } = JSON.parse(body);

  const user = await prisma.userContact
    .create({
      data: {
        name: name,
        email: email,
        phone: phone,
        message: message,
      },
    })
    .catch((e) => {
      return res.status(500).json({
        status: "error",
        data: e,
      });
    })
    .finally(async () => {
      await prisma.$disconnect();
    });

  return res.status(201).json({
    status: "success",
    data: email,
  });
};

export default handler;
