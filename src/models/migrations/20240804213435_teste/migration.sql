-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "cpf" INTEGER NOT NULL,
    "nome" VARCHAR(30) NOT NULL,
    "email" TEXT NOT NULL,
    "hash" INTEGER NOT NULL,
    "salt" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco" MONEY NOT NULL,
    "descricao" TEXT,
    "categoria" VARCHAR(30),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_cpf_key" ON "Usuario"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
