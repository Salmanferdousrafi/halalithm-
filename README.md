# Halalithm

**The Trust Algorithm for the Halal Economy**

AI-powered verification for what billions consume, wear, and trust.

---

## Features

- Barcode Scanner (camera + manual)
- OCR Ingredient Scanner
- AI Halal/Haram/Makruh Engine
- Global Recipe Search
- YouTube Halal Recipe Integration
- Scholar & Admin Dashboard
- SEO-optimized Product Pages
- Multi-language: English, Arabic, Urdu, Bengali
- Supabase Database + Auth

---

## Tech Stack

| Layer      | Technology                  |
|------------|-----------------------------|
| Frontend   | Next.js 14 + React 18       |
| Styling    | Tailwind CSS                |
| Database   | Supabase (PostgreSQL)       |
| OCR        | Tesseract.js                |
| Deployment | Vercel                      |

---

## Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/halalithm.git
cd halalithm
npm install
cp .env.example .env.local
# Fill in your Supabase keys in .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Database Setup

1. Create a project at [supabase.com](https://supabase.com)
2. Open SQL Editor
3. Run `supabase/schema.sql`
4. Run `supabase/seed.sql`
5. Copy your URL and anon key into `.env.local`

---

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add environment variables
4. Click Deploy

---

## Roadmap

- [ ] Real camera barcode scanner (ZXing)
- [ ] OpenFoodFacts API integration
- [ ] AI ingredient classifier (LLM)
- [ ] React Native mobile app
- [ ] Scholar verification board
- [ ] Government halal certification API
- [ ] Chrome extension
- [ ] Electron desktop app

---

## License

MIT © 2026 Halalithm
