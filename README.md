# 🛒 Admin Dashboard - Product Management API

A full-featured backend project for managing products with image upload support, built using **TypeScript**, **Express**, **TypeORM**, **PostgreSQL**, **Multer**, and **Cloudinary**. Deployed seamlessly on **Render**.

---

## 🚀 Features

- 📦 **Product CRUD** – Create, Read, Update, Delete Products
- 🖼️ **Image Upload** – Upload multiple images with Multer
- ☁️ **Cloud Storage** – Image storage powered by Cloudinary
- 📁 **TypeORM** – Smooth ORM integration with PostgreSQL
- ⚙️ **TypeScript** – Fully typed and scalable codebase
- 🌐 **Deployed** – Hosted backend API live on Render

---

## 📸 Screenshots

| 📋 Product List | ➕ Add Product | 🖊️ Edit Product |
|----------------|---------------|----------------|
| [![Screenshot-2025-07-07-185925.png](https://i.postimg.cc/qMc58Pw7/Screenshot-2025-07-07-185925.png)](https://postimg.cc/gnJspBf9) | [![image.png](https://i.postimg.cc/tJ32N6hc/image.png)](https://postimg.cc/K3YPZRp7) | ![image](https://github.com/user-attachments/assets/ef211b23-7a5a-483a-9f38-c4bbc8de0321)


---

## ⚙️ Tech Stack

| Layer        | Tech                        |
|--------------|-----------------------------|
| Language     | TypeScript                  |
| Framework    | Node.js + Express           |
| ORM          | TypeORM                     |
| Database     | PostgreSQL                  |
| File Upload  | Multer                      |
| Image Host   | Cloudinary                  |
| Deployment   | Render                      |
| Styling (UI) | Tailwind CSS |

---

## 📁 Project Structure

```bash
├── src/
│   ├── config/
│   │   ├── datasource.ts         # PostgreSQL connection
│   │   └── cloudinary.ts         # Cloudinary config
│   ├── controller/
│   │   └── product.controller.ts # Core logic for product CRUD
│   ├── entity/
│   │   └── product.ts            # Product entity schema
│   ├── middleware/
│   │   └── multer.ts             # Multer with Cloudinary
│   ├── routes/
│   │   └── product.route.ts      # API routes
│   └── index.ts                  # App entry point
├── .env                          # Environment variables
├── tsconfig.json                 # TypeScript config
└── package.json                  # Project dependencies
````

---

## 🌐 API Endpoints

| Method | Route              | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/getall`          | Get all products   |
| GET    | `/getproduct/:sku` | Get product by SKU |
| POST   | `/add`             | Add new product    |
| PUT    | `/update/:sku`     | Update product     |
| DELETE | `/delete/:sku`     | Delete product     |

> Images are sent using `multipart/form-data` with key `image`.

---

## 🔐 Environment Variables

Create a `.env` file:

```env
PORT=3000
DATABASE_URL=your_postgres_db_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🧪 Testing (Postman)

* Use **form-data** tab for POST/PUT requests.
* Key for image upload must be **`image`** (with type "File").
* Add `name`, `price`, and `description` as text fields.

---

## 📦 Deployment (Render)

### ➤ Build & Start Commands

```bash
Build command:     npm run build
Start command:     npm start
```

### ➤ Important

Ensure all dependencies are listed in `package.json` under `dependencies`, not just `devDependencies`.

---

## 👨‍💻 Author

**Aakash Gupta**
GitHub: [@aakash-gupta02](https://github.com/aakash-gupta02)

---

## 📝 License

MIT License – Free to use and modify.
