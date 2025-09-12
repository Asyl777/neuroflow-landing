FROM node:latest

WORKDIR /app
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем остальные файлы
COPY . .

# Принудительно даем права на выполнение для vite
RUN chmod +x /app/node_modules/.bin/vite

# Открываем порт 4000
EXPOSE 4000

# Запускаем dev-сервер на порту 4000
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "4000"]
