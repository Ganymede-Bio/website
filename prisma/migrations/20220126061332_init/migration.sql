-- CreateTable
CREATE TABLE "UserInfoRequest" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "UserInfoRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserInfoRequest_email_key" ON "UserInfoRequest"("email");
