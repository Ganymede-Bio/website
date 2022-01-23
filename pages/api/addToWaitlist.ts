import prisma from "../../lib/prisma";

const handler = async (req: Request, res: Response) => {
  const { body } = req;
  const { email } = JSON.parse(body);
  const user = await prisma.userInfoRequest
    .create({
      data: { email: email },
    })
    .catch((e) => {
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
