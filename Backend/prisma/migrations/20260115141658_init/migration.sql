-- CreateEnum
CREATE TYPE "ApiEnvironment" AS ENUM ('DEVELOPMENT', 'PRODUCTION');

-- CreateEnum
CREATE TYPE "JwtAlgorithm" AS ENUM ('RS256');

-- CreateTable
CREATE TABLE "ProjectApiKey" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "apiKey" TEXT NOT NULL,
    "secretKeyHash" TEXT NOT NULL,
    "environment" "ApiEnvironment" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectApiKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectJwtKey" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "kid" TEXT NOT NULL,
    "publicKey" TEXT NOT NULL,
    "privateKeyEncrypted" TEXT NOT NULL,
    "algorithm" "JwtAlgorithm" NOT NULL DEFAULT 'RS256',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectJwtKey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectApiKey_apiKey_key" ON "ProjectApiKey"("apiKey");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectJwtKey_kid_key" ON "ProjectJwtKey"("kid");

-- AddForeignKey
ALTER TABLE "ProjectApiKey" ADD CONSTRAINT "ProjectApiKey_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectJwtKey" ADD CONSTRAINT "ProjectJwtKey_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
