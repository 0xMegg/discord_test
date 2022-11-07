-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "serverId" INTEGER NOT NULL,
    "point01" INTEGER NOT NULL,
    "point02" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");
