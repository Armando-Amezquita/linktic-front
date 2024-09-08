# Utiliza una imagen base con Node.js
FROM node:latest as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /CHAMPIONSTRACKER

# Copia el archivo package.json y package-lock.json (si existe)
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todo el código fuente del proyecto al contenedor
COPY . .

# Expone el puerto en que se ejecutará la aplicación
EXPOSE 3202

# Construye la aplicación React (esto puede variar dependiendo de cómo esté configurado tu proyecto)
RUN npm run build
