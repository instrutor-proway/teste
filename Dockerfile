# Dockerfile para aplicação Node.js usando node:alpine
FROM node:alpine

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante da aplicação
COPY . .

# Expõe a porta padrão do Express
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]