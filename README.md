# Hotel Booking (React + Vite)

A simple hotel booking frontend built with React and Vite. This repository contains a client app that includes pages for listing rooms, viewing details, user bookings, and a hotel owner dashboard.

**Live Demo:** https://quickstay-hotels-p22.vercel.app/

---

**Prerequisites**

- Node.js (>=16) and npm or Yarn/pnpm
- A Clerk publishable key for authentication: `VITE_CLERK_PUBLISHABLE_KEY`

**Quick Start**

1. Open a terminal and go to the client folder:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
# or
# yarn
# pnpm install
```

3. Create a `.env` (or `.env.local`) file in `client/` with your Clerk publishable key:

```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...
```

4. Run the dev server:

```bash
npm run dev
```

The Vite dev server typically runs on http://localhost:5173.

**Build & Preview**

```bash
npm run build
npm run preview
```

**Project Structure**

The important files and folders (workspace root contains `client/`):

```
client/
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    ├── assets/
    │   └── assets.js
    ├── components/
    │   ├── ExclusiveOffers.jsx
    │   ├── FeaturedDestination.jsx
    │   ├── Footer.jsx
    │   ├── Hero.jsx
    │   ├── HotelCard.jsx
    │   ├── HotelReg.jsx
    │   ├── Navbar.jsx
    │   ├── NewsLetter.jsx
    │   ├── StarRating.jsx
    │   ├── Testimonial.jsx
    │   ├── Title.jsx
    │   └── hotelOwner/
    │       ├── Navbar.jsx
    │       └── Sidebar.jsx
    ├── pages/
        ├── About.jsx
        ├── Experience.jsx
        ├── AllRooms.jsx
        ├── Home.jsx
        ├── MyBookings.jsx
        ├── RoomDetails.jsx
        └── hotelOwner/
            ├── AddRoom.jsx
            ├── Dashboard.jsx
            ├── Layout.jsx
            └── ListRoom.jsx
```

**Notes**

- The app uses Clerk for auth; ensure `VITE_CLERK_PUBLISHABLE_KEY` is set before starting.
- Routing is handled with `react-router-dom`. Hotel owner pages are nested under `/owner`.
- Styling uses Tailwind (see `index.css`).

**Useful scripts (from `client/package.json`)**

- `npm run dev` — start Vite dev server
- `npm run build` — build production bundle
- `npm run preview` — preview production build locally

## Recent Changes

- Updated the About page to include animations using `framer-motion`.
- Installed the latest versions of `react`, `react-dom`, and `framer-motion`.

## Dependencies

- Added `framer-motion` for animations in the UI.
- Ensure to run `npm install` to get the latest dependencies.

**Contributing**

- Open an issue or submit a PR with changes.

---

If you'd like, I can also:
- Add a root-level README badge or screenshots
- Add environment-specific `.env.example`
- Add a short CONTRIBUTING guide

