# SunCart 🌞

A modern e-commerce store for summer products built with Next.js and Better Auth.

## Live Demo

https://summer-cart-rust.vercel.app/

---

## Features

- 🛍️ Browse and view detailed summer product listings
- 🔐 Email & password authentication (register / login)
- 🔑 Google OAuth sign-in
- 🛡️ Protected routes — product details visible to registered users only
- 📱 Fully responsive design across all screen sizes

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Auth | Better Auth |
| UI Components | HeroUI + Tailwind CSS |
| Icons | Iconify + Gravity UI |
| Notifications | React Hot Toast |
| Deployment | Vercel |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/toqitahmid/Sun-Cart.git
cd Sun-Cart

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
BETTER_AUTH_SECRET=your_secret_here
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── (main)/
│   │   ├── products/
│   │   │   └── [id]/        # Product details (protected)
│   │   └── layout.jsx       # Navbar + Footer layout
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   └── ui/
│       ├── hero/
│       └── navbar/
├── lib/
│   ├── auth.js              # Better Auth config
│   ├── auth-client.js       # Client-side auth
│   └── data.js              # Product data
└── middleware.ts            # Route protection
```

---

## Authentication Flow

- Users can register with email and password or sign in with Google
- Product detail pages are protected — unauthenticated users are redirected to `/login`
- Sessions are managed by Better Auth with secure cookie handling

---

## Deployment

The project is deployed on Vercel. To deploy your own instance:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)
