# Scholarstoday Frontend Intern Assestment

Aplikasi web sederhana yang dibangun menggunakan React dan Tailwind CSS untuk menampilkan data postingan dari API publik JSONPlaceholder.

AI Prompt: 
```
saya sedang mengerjakan tes untuk mendaftar sebagai frontend developer, saya mengembangkan sebuah aplikasi web sederhana menggunakan React dan Tailwind CSS yang berfungsi untuk menampilkan data postingan (posts) yang diperoleh dari API publik JSONPlaceholder.

- halaman daftar postingan (post list page) yang menampilkan seluruh data posts dari API.
- halaman detail postingan (post detail page) yang menampilkan informasi lengkap dari sebuah post yang dipilih.

tolong bantu saya membuat readme nya yang mencakup: penjelasan mengenai proyek, cara menjalankan aplikasi, serta informasi relevan lainnya.
```

---

🚀 Fitur
### 1. Post List Page
- Menampilkan seluruh data post dari API
- Setiap post dapat diklik untuk melihat detail
- Data diambil dari: https://jsonplaceholder.typicode.com/posts

### 2. Post Detail Page
- Menampilkan informasi lengkap dari post yang dipilih
- Menggunakan parameter `id` pada URL
- Data diambil dari: https://jsonplaceholder.typicode.com/posts/{id}

---

## 🛠️ Tech Stack

- Vite
- React
- React Router DOM
- Tailwind CSS
- Axios / Fetch API
- JSONPlaceholder (Public API)

---

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/jihadable/scholarstoday-frontend-intern.git
```

### 2. Masuk ke folder projek

```bash
cd scholarstoday-frontend-intern
```

### 3. Install dependencies

```bash
npm install
```

### 4. Buat file .env
Bisa melihat contoh pada file .env.example
```bash
VITE_API_ENDPOINT=
```

### 5. Jalankan aplikasi

```bash
npm run dev
```