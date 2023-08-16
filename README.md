# Next Plane Overhead
A demo application built to learn NextJs and Reacts new Client Component and Server Component Architecture.
This application will utilize google maps and an ADSB provider to visualize the current flights in your area.

## Getting Started

First, set the required environment variables:
Create a root level file `.env.local` and add the following variables:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
OPEN_SKY_NETWORK_USERNAME=
OPEN_SKY_NETWORK_PASSWORD=
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Production Build:

```bash
npm run build
npm run start
```

Sources:
Tailwind Components - [Tail-Kit](https://www.tailwind-kit.com/)

