# Spectivis Cloud sample: Next.js

A small Next.js 16 App Router app that shows the current patterns and what Spectivis Cloud runs for you.

| Pattern | Where |
|---|---|
| Server components | `app/page.tsx` and `app/_components/` |
| A server action | `app/actions.ts`, called by the form on the home page |
| A streamed section with `Suspense` | The server details block on the home page arrives after the heading |
| An `after()` callback | `saveNote` logs a line once the response is sent. Look for it in the Logs tab. |
| A route handler | `app/api/health/route.ts` |

The app is server-rendered. It does not use `output: 'export'`, so Cloud runs it as a web app, not a static site. `npm start` listens on `PORT` and `HOSTNAME`, which Cloud sets.

Dynamic parts call `connection()` inside `Suspense`, which is the Next.js 16 way to say "render this per request". There is no `export const dynamic = 'force-dynamic'`.

Notes are kept in memory so the sample needs no database. They reset on each deploy.

## Deploy it on Spectivis Cloud

1. In Spectivis Cloud, choose New app, then "Deploy a sample", then Next.js.
2. Leave the Next.js preset on. The health path is `/` and there is no release command.
3. Open the app. The heading shows at once and the server details stream in about a second and a half later. Add a note, then check the Logs tab for the `after()` line.

## Run it locally

Node 22 or newer.

```
npm install
npm run dev
```

Production mode:

```
npm run build
PORT=3000 HOSTNAME=0.0.0.0 npm start
```

## Test it

```
npm run typecheck
npm test
npm run build
```

## Build check

`railpack info .` with Railpack 0.43.0 detects the Node provider with npm and Node 22, and runs the `build` and `start` scripts.
