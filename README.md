# LeadDesk Mini

A full-stack lead management application built with the MERN stack. Agencies and service businesses can capture inbound inquiries through a public form, then manage and track them in a secure admin dashboard.

## Features

- **Public Lead Form** — Capture name, email, budget range, and message from website visitors
- **Client-side Validation** — Instant feedback before submission
- **Server-side Validation** — Express-validator sanitises and validates every request
- **Secure Admin Dashboard** — JWT-authenticated dashboard for viewing and managing leads
- **Lead Status Tracking** — Move leads through New → Contacted → Closed
- **Search & Filter** — Search by name/email, filter by status
- **Pagination** — Navigate through large lead lists
- **Responsive Design** — Works on 360px mobile through 1440px desktop
- **HTTP-only Cookies** — No localStorage/sessionStorage; JWT stored in signed, HTTP-only cookies
- **Rate Limiting** — Login endpoint protected against brute-force attacks
- **Helmet Security** — HTTP headers secured via Helmet

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS 3, React Router 7, Axios |
| Backend | Express.js 4, Mongoose 8, JWT (jsonwebtoken) |
| Database | MongoDB |
| Auth | bcryptjs, HTTP-only signed cookies |
| Validation | express-validator (server), custom hooks (client) |

## Project Architecture

```
Browser ──► React (Vite) ──► Axios ──► Express API ──► MongoDB
                 │                        │
           Tailwind CSS              JWT Auth via
           Responsive UI             HTTP-only cookies
```

The frontend and backend are completely separate processes. In development, Vite proxies `/api` requests to the Express server. In production, the frontend is built as static files and served from a CDN or static host (Netlify), while the backend runs on a Node.js host (Render).

## Folder Structure

```
LeadDesk-Mini/
├── client/                          # React frontend (Vite)
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/               # Admin dashboard components
│   │   │   │   ├── AdminLayout.jsx
│   │   │   │   ├── EmptyState.jsx
│   │   │   │   ├── FilterDropdown.jsx
│   │   │   │   ├── LeadRow.jsx
│   │   │   │   ├── LeadTable.jsx
│   │   │   │   ├── LoadingSkeleton.jsx
│   │   │   │   ├── Pagination.jsx
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── StatsCards.jsx
│   │   │   │   ├── StatusSelector.jsx
│   │   │   │   └── ViewMessageModal.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Toast.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.jsx          # AuthContext + ProtectedRoute
│   │   ├── pages/
│   │   │   ├── admin/
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Login.jsx
│   │   ├── services/
│   │   │   ├── api.js               # Axios instance with 401 interceptor
│   │   │   ├── authService.js
│   │   │   └── leadService.js
│   │   ├── utils/
│   │   │   └── validation.js
│   │   ├── App.jsx                  # Route definitions
│   │   ├── index.css
│   │   └── main.jsx                 # Entry point
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/                          # Express backend
│   ├── config/
│   │   ├── db.js
│   │   └── index.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── leadController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validate.js
│   ├── models/
│   │   ├── Lead.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── leads.js
│   ├── scripts/
│   │   └── seed.js                  # Creates the first admin user
│   ├── utils/
│   │   ├── AppError.js
│   │   ├── constants.js
│   │   └── generateToken.js
│   ├── .env.example
│   ├── app.js
│   ├── package.json
│   └── server.js
├── .gitignore
├── package.json                     # Root workspace scripts
└── README.md
```

## Installation

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm

### 1. Clone and install

```bash
cd LeadDesk-Mini
npm run install:all
```

This installs dependencies for the root, server, and client.

### 2. Configure environment

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

Edit `server/.env` with your MongoDB URI and a secure JWT secret.

### 3. Seed the admin user

```bash
npm run seed --prefix server
```

Default credentials: `admin@leaddesk.com` / `5hoIACXPlxdEV2b73tM0KHRsYQrjfzwq`  
Override via `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `server/.env`.

### 4. Start development

```bash
npm run dev
```

Starts both server (port 5000) and client (port 5173) concurrently.

## Environment Variables

### Server (`server/.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/leaddesk-mini` |
| `JWT_SECRET` | Secret key for signing JWTs | (required) |
| `JWT_EXPIRES_IN` | JWT expiration duration | `7d` |
| `CLIENT_URL` | Frontend origin for CORS | `http://localhost:5173` |
| `COOKIE_SECRET` | Secret for signing cookies | (required) |

### Client (`client/.env`)

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_URL` | Backend URL (empty = use Vite proxy) | (empty) |

## How Authentication Works

1. **Login**: Admin enters email/password → server validates → creates JWT → stores in HTTP-only signed cookie
2. **Session verification**: On page load, `GET /api/auth/me` reads the cookie, verifies the JWT, returns user data
3. **Protected routes**: `ProtectedRoute` component checks auth state; redirects to `/login` if unauthenticated
4. **Logout**: `POST /api/auth/logout` clears the cookie
5. **401 interceptor**: Axios globally catches 401 responses and redirects to `/login` (except on the login endpoint)
6. **No localStorage/sessionStorage**: The JWT never touches JavaScript-accessible storage

## Database Schema

### User

```
email       String (unique, lowercase, trimmed)
password    String (bcrypt-hashed, select: false)
createdAt   Date (auto via timestamps)
updatedAt   Date (auto via timestamps)
```

### Lead

```
name        String (required, trimmed)
email       String (required, lowercase, trimmed)
budget      String (required, enum: Under $1,000 | $1,000–$5,000 | $5,000–$10,000 | Over $10,000)
message     String (max 1000 chars)
status      String (enum: New | Contacted | Closed, default: New)
createdAt   Date (auto via timestamps)
updatedAt   Date (auto via timestamps)
```

## API Documentation

### POST /api/auth/login

Authenticates an admin user and sets a JWT cookie.

- **Auth**: None
- **Rate limited**: 10 requests per 15 minutes

**Request body:**
```json
{
  "email": "admin@leaddesk.com",
  "password": "5hoIACXPlxdEV2b73tM0KHRsYQrjfzwq"
}
```

**Success response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "_id": "...",
      "email": "admin@leaddesk.com",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

**Error responses:**
| Status | Condition |
|--------|-----------|
| 400 | Validation failed |
| 401 | Invalid email or password |
| 429 | Too many attempts |

---

### GET /api/auth/me

Returns the currently authenticated user.

- **Auth**: Required (cookie)

**Success response (200):**
```json
{
  "success": true,
  "data": {
    "user": { "_id": "...", "email": "...", "createdAt": "...", "updatedAt": "..." }
  }
}
```

**Error responses:**
| Status | Condition |
|--------|-----------|
| 401 | Not authenticated |
| 404 | User not found |

---

### POST /api/auth/logout

Clears the authentication cookie.

- **Auth**: None

**Success response (200):**
```json
{
  "success": true,
  "data": { "message": "Logged out successfully." }
}
```

---

### POST /api/leads

Creates a new lead. Public endpoint — no authentication required.

- **Auth**: None

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "budget": "$1,000–$5,000",
  "message": "I need help with..." 
}
```

**Success response (201):**
```json
{
  "success": true,
  "data": {
    "lead": {
      "_id": "...",
      "name": "Jane Doe",
      "email": "jane@example.com",
      "budget": "$1,000–$5,000",
      "message": "I need help with...",
      "status": "New",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

**Error responses:**
| Status | Condition |
|--------|-----------|
| 400 | Validation failed (missing/invalid fields) |

---

### GET /api/leads

Returns paginated leads. Protected — admin only.

- **Auth**: Required (cookie)

**Query parameters:**
| Param | Type | Description |
|-------|------|-------------|
| `search` | string | Search by name, email, or message |
| `status` | string | Filter by status: `New`, `Contacted`, or `Closed` |
| `page` | number | Page number (default: 1) |
| `limit` | number | Items per page (default: 20) |

**Success response (200):**
```json
{
  "success": true,
  "data": {
    "leads": [
      {
        "_id": "...",
        "name": "Jane Doe",
        "email": "jane@example.com",
        "budget": "$1,000–$5,000",
        "message": "I need help with...",
        "status": "New",
        "createdAt": "...",
        "updatedAt": "..."
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 10,
      "total": 25,
      "pages": 3
    }
  }
}
```

**Error responses:**
| Status | Condition |
|--------|-----------|
| 401 | Not authenticated |

---

### PATCH /api/leads/:id/status

Updates the status of a lead. Protected — admin only.

- **Auth**: Required (cookie)

**Request body:**
```json
{
  "status": "Contacted"
}
```

**Success response (200):**
```json
{
  "success": true,
  "data": {
    "lead": { "...": "..." }
  }
}
```

**Error responses:**
| Status | Condition |
|--------|-----------|
| 400 | Invalid status value |
| 401 | Not authenticated |
| 404 | Lead not found |

---

### GET /api/leads/stats

Returns lead counts grouped by status. Protected — admin only.

- **Auth**: Required (cookie)

**Success response (200):**
```json
{
  "success": true,
  "data": {
    "total": 25,
    "new": 10,
    "contacted": 8,
    "closed": 7
  }
}
```

---

## Deployment

### Backend (Render)

1. Push the repository to GitHub
2. Create a new **Web Service** on Render
3. Connect your GitHub repository
4. Set:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add all environment variables from `server/.env.example` in Render dashboard
6. Ensure `MONGODB_URI` points to your production MongoDB (Atlas or similar)
7. Set `NODE_ENV=production`
8. Set `CLIENT_URL` to your deployed frontend URL
9. Deploy

### Frontend (Netlify)

1. In the Netlify dashboard, create a new site from Git
2. Connect your GitHub repository
3. Set:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/dist`
4. Add environment variable:
   - `VITE_API_URL` = your deployed Render backend URL
5. Deploy
6. Optional: Add redirect rule for SPA — create `client/public/_redirects` with:
   ```
   /*    /index.html   200
   ```

### Production checklist

- [ ] `JWT_SECRET` set to a strong random string
- [ ] `COOKIE_SECRET` set to a strong random string
- [ ] `MONGODB_URI` points to production database
- [ ] `CLIENT_URL` matches frontend domain exactly
- [ ] `NODE_ENV` set to `production`
- [ ] Cookie `secure: true` and `sameSite: 'strict'` in production (auto-enables via config)
- [ ] Admin credentials seeded and changed from defaults

## Test Credentials

After running the seed script, the default admin account is:

- **Email**: `admin@leaddesk.com`
- **Password**: `5hoIACXPlxdEV2b73tM0KHRsYQrjfzwq`

Change these in production via `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables.

## Future Improvements

- Email notifications when a new lead is submitted
- Export leads to CSV
- Role-based access (multiple admin levels)
- Lead assignment to team members
- Activity log / audit trail
- File attachments on lead submissions


## AI Usage Statement

AI tools (Claude, GitHub Copilot) were used to assist with brainstorming, architecture planning, debugging, and documentation throughout this project. All implementation decisions, testing, refinements, and final review were completed by the developer.
