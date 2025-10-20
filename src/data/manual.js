export const manual = {
  scripts: {
    title: "Scripts de Instalación y Despliegue",
    items: [
      {
        name: "Dockerfile",
        description:
          "Define la imagen base Ubuntu 22.04, instala dependencias y despliega backend + frontend.",
        code: `
# Imagen base Ubuntu
FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive
WORKDIR /opt

# --- Instalación de dependencias del sistema ---
RUN apt-get update && apt-get install -y \\
    python3 python3-pip python3-venv python3-dev \\
    git \\
    curl \\
    default-mysql-client \\
    libmysqlclient-dev pkg-config build-essential \\
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \\
    && apt-get install -y nodejs \\
    && apt-get clean

# --- Clonar repositorio Backend ---
RUN git clone https://github.com/oscar-dev91/BancoDemoREST.git
WORKDIR /opt/BancoDemoREST

RUN pip3 install --upgrade pip && pip3 install -r requirements.txt

# --- Variables de entorno Django ---
RUN echo "SECRET_KEY=django-insecure-d6*a@$3hhoe)romni8a5-gl84w4n^()3a@n5f25#%zxfz6agt5\\n
DEBUG=True\\n
DB_NAME=bancodemodb\\n
DB_USER=root\\n
DB_PASSWORD=1234\\n
DB_HOST=mysql_bancodemo\\n
DB_PORT=3306" > bancodemo/.env

# --- Clonar repositorio Frontend ---
WORKDIR /opt
RUN git clone https://github.com/oscar-dev91/BancoDemoFrontend.git
WORKDIR /opt/BancoDemoFrontend

# --- Instalar dependencias del Frontend ---
RUN npm install

# --- Exponer puertos ---
EXPOSE 8000 5173

# --- Script de inicio combinado (Backend + Frontend) ---
WORKDIR /opt/BancoDemoREST/bancodemo

CMD bash -c "\\
  echo 'Inicializando backend Django...' && \\
  python3 manage.py makemigrations core && \\
  python3 manage.py migrate && \\
  python3 manage.py runserver 0.0.0.0:8000 & \\
  echo 'Inicializando frontend Vite...' && \\
  cd /opt/BancoDemoFrontend && npm run dev -- --host 0.0.0.0 \\
"

        `,
      },
      {
        name: "docker-compose.yml",
        description: "Orquesta MySQL, backend y frontend en red interna.",
        code: `
services:
  # --- Servicio MySQL ---
  mysql_bancodemo:
    image: mysql:8.0
    container_name: mysql_bancodemo
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: 1234
      MYSQL_DATABASE: bancodemodb
    ports:
      - "3306:3306"
    volumes:
      - ./data/mysql:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]
      interval: 10s
      timeout: 5s
      retries: 10
    networks:
      - bancodemo_network

  # --- Servicio Backend Django ---
  bancodemo_backend:
    build: .
    container_name: bancodemo_backend
    depends_on:
      mysql_bancodemo:
        condition: service_healthy
    environment:
      DB_HOST: mysql_bancodemo
      DB_NAME: bancodemodb
      DB_USER: root
      DB_PASSWORD: 1234
      DB_PORT: 3306
    ports:
      - "8000:8000"
    networks:
      - bancodemo_network

  # --- Servicio Frontend ---
  bancodemo_frontend:
    build: .
    container_name: bancodemo_frontend
    working_dir: /opt/BancoDemoFrontend
    command: bash -c "npm install && npm run dev -- --host 0.0.0.0"
    ports:
      - "5173:5173"
    depends_on:
      - bancodemo_backend
    environment:
      - VITE_API_URL=http://bancodemo_backend:8000/api/
    networks:
      - bancodemo_network

networks:
  bancodemo_network:
    driver: bridge

        `,
      },
    ],
  },
};
