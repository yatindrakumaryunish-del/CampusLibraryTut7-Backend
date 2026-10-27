# 📚 Campus Library - Simple REST API Project

> **Updated Version**: GraphQL ko Express REST API se replace kar diya gaya hai. Simple, easy to understand, aur beginner-friendly!

## 🎯 Overview

Yeh ek basic library management system hai jahan aap authors aur unki books ko manage kar sakte ho. Pura backend **Express.js REST API** mein convert kar diya gaya hai, aur frontend ko modern aur attractive banaya gaya hai.

## ✨ Features

- ✅ Authors aur unki books ko dekho
- ✅ Naya book add karo  
- ✅ Book delete karo
- ✅ Simple REST API (GraphQL remove kar diya)
- ✅ Clean aur modern UI with animations
- ✅ Toast notifications
- ✅ Responsive design (mobile friendly)

## 🛠️ Technologies Used

### Backend:
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework (REST API)
- **MySQL** - Database
- **mysql2** - MySQL client
- **dotenv** - Environment variables

### Frontend:
- **HTML5** - Structure
- **CSS3** - Styling with gradients & animations
- **Vanilla JavaScript** - Logic (no frameworks)

## 📦 Installation

### Prerequisites
- Node.js aur npm installed hona chahiye
- MySQL Server running hona chahiye

### Step 1: Dependencies Install Karo

```bash
npm install
```

### Step 2: Database Setup

MySQL mein jaao aur database create karo:

```bash
mysql -u root -p
```

Phir `schema.sql` file ko run karo:

```sql
source schema.sql
```

**PowerShell se:**
```powershell
Get-Content .\schema.sql -Raw | mysql -u root -p
```

### Step 3: Environment Variables

Project root mein `.env` file banao:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_here
DB_NAME=gqldemo
```

**⚠️ Important:** Apna actual MySQL password daalo! Agar password nahi hai to `DB_PASSWORD=` khali chod do.

### Step 4: Server Start Karo

**Development Mode** (auto-restart with nodemon):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

Server start ho jayega: **http://localhost:4000** 🚀

## 🔌 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/authors` | Sabhi authors aur unki books |
| `GET` | `/api/authors/:id` | Specific author ki details |
| `GET` | `/api/books` | Sabhi books |
| `GET` | `/api/books?year=2023` | Year ke hisaab se books |
| `POST` | `/api/books` | Naya book add karo |
| `DELETE` | `/api/books/:id` | Book delete karo |

### Example API Calls:

**Add Book:**
```bash
curl -X POST http://localhost:4000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "New Book", "year": 2024, "authorId": 1}'
```

**Delete Book:**
```bash
curl -X DELETE http://localhost:4000/api/books/5
```

## 📁 Project Structure

```
campus-library/
│
├── public/              # Frontend files
│   ├── index.html      # Main HTML page (updated UI)
│   └── style.css       # Modern styling with gradients
│
├── server.js           # Express REST API (GraphQL removed)
├── db.js               # MySQL connection pool
├── schema.sql          # Database schema
├── package.json        # Dependencies
├── .env                # Environment variables (create this)
└── README.md           # This file
```

## 🎨 UI Changes

### Before (Old):
- Simple, basic design
- GraphQL queries
- Limited interactivity

### After (New):
- 🎨 Modern gradient background
- 💳 Beautiful card-based layout
- ✨ Smooth animations & hover effects
- 🔔 Toast notifications for success/error
- 📱 Fully responsive (mobile friendly)
- 🎯 Clean, intuitive interface

## 🔄 Backend Changes

### GraphQL ❌ → Express REST API ✅

**Before:**
- Apollo Server
- GraphQL schema & resolvers
- Complex queries & mutations

**After:**
- Simple Express routes
- Easy-to-understand REST endpoints
- Clear HTTP methods (GET, POST, DELETE)
- JSON responses
- Better error handling

## 🐛 Troubleshooting

### Port already in use?
```bash
# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F

# Ya server.js mein PORT change karo
```

### Database connection error?
- ✅ `.env` file check karo
- ✅ MySQL server running hai?
- ✅ Password correct hai?
- ✅ Database `gqldemo` create hua hai?

### npm install error?
```bash
npm cache clean --force
npm install
```

## 📝 Code Comments

Sare code mein **Hindi comments** diye gaye hain taaki easily samajh aaye:

```javascript
// Authors fetch karo
const [authors] = await pool.query('SELECT * FROM authors');
```

## 🎓 Learning Points

Is project se seekh sakte ho:
- ✅ Express.js server setup
- ✅ REST API routes banane ka tarika
- ✅ MySQL database integration
- ✅ Frontend-backend connection
- ✅ Async/await usage
- ✅ Error handling
- ✅ Modern UI design

## 👨‍💻 Original Team (GraphQL Version)

- Alka Jha - 20251651013
- Alok Mishra - 20251651014
- Nandini Kanaujiya - 20251651061
- Radhika Verma - 20251651075

**Repository**: [CampusEats](https://github.com/Nandinikanaujiya/campuseats)

---

## 🚀 Quick Start Summary

```bash
# 1. Install
npm install

# 2. Create .env file with your DB credentials

# 3. Setup database
mysql -u root -p < schema.sql

# 4. Run
npm run dev

# 5. Open browser
http://localhost:4000
```

**Made with ❤️ - Simple, Easy, and Beginner Friendly!**
