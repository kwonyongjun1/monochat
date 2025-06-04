# 이미지를 어떻게 만들지 정의

# 1단계: 빌드 환경
FROM node:22.11.0 AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY .env .env
COPY . .
RUN npm run build

# 2단계: 실행 환경
FROM node:22.11.0 AS runner
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["npm", "start"]