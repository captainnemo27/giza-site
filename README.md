# Giza Digital Landing Page

Landing page giới thiệu dịch vụ Data, AI và Web Applications của Giza Digital.

Website được xây dựng đơn giản bằng React, TypeScript và Vite; hỗ trợ chạy local bằng npm hoặc Docker Compose và tự động deploy lên GitHub Pages.

## Demo

- GitHub Pages: https://captainnemo27.github.io/giza-site/
- Local: http://localhost:3000

## Công nghệ

- React 19
- TypeScript
- Vite
- Docker / Docker Compose
- GitHub Actions / GitHub Pages

## Chạy bằng Docker Compose

```bash
docker compose up --build
```

Mở http://localhost:3000 trong trình duyệt.

Dừng website:

```bash
docker compose down
```

## Chạy trực tiếp bằng Node.js

Yêu cầu Node.js 22 trở lên.

```bash
npm install
npm run dev
```

Vite development server sẽ hiển thị địa chỉ truy cập trong terminal.

## Build production

```bash
npm run build
```

Kết quả build nằm trong thư mục `dist/`.

## Cấu trúc chính

```text
giza-site/
├── public/                  # Logo và hình ảnh dự án
├── src/
│   ├── App.tsx              # Nội dung landing page
│   ├── index.css            # Giao diện và responsive styles
│   └── main.tsx             # React entry point
├── .github/workflows/       # GitHub Pages deployment
├── compose.yaml             # Chạy local bằng Docker Compose
├── Dockerfile
└── vite.config.ts
```

## Deploy lên GitHub Pages

Mỗi lần code được push lên nhánh `main`, workflow `Deploy GitHub Pages` sẽ tự động:

1. Cài dependencies.
2. Build website.
3. Deploy thư mục `dist/` lên GitHub Pages.

Theo dõi trạng thái deploy tại tab **Actions** của repository.

## Nội dung website

Menu chính gồm:

- Services
- Work
- About Us
- Contact Us

Thông tin liên hệ: hello@gizadigital.vn
