# Teneo

> Teneo is a News and Wiki Decentralized Application.

### Project Description

The goal of the project is to use RSS3 and create an intuitive Web application where users can search the Blockchain Addresses and explore the RSS Feeds from them.

The project is built on top of the `RSS3 PreGod API` with additional features to upvote useful feeds for others to see.

### Features:

- Upvoting Feed for other users to see
- Mobile Support
- Uses RSS3's Pregod API v.0.4.0 for all the data in the site
- View more details about the Feed, NFT Metadata, Related URLs ETC.
- View which address others users are looking at the most.

### Demo

Try the [Live Demo](https://teneo.vercel.app)

### Development: Getting Started

#### Setting up ENV

This project is using Firebase as a prototype database so, you need to create a firebase project and create a `.env` file with the following values.

```txt
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

> The project frontend is built using NextJS
> First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
