import prisma from "../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;
  const { email } = JSON.parse(body);

  const user = await prisma.userInfoRequest
    .create({
      data: { email: email },
    })
    .catch((e: Error) => {
      throw e;
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
