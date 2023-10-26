# Modular Remix Template

I start a lot of projects, and Remix is in my mind a perfect platform for new React projects thanks to its great SSR, routing, and loader / action design. I made this template to speed up the initial development step by setting up the aspects of a new project that should always stay the same:

-   styling (right now that is Tailwind)
-   database connection and ORM (TBD)
-   authentication (simple email and password, can be adapted)

## Setup

1. Start by creating a new project from this template
2. Choose your own database setup, and setup a .env file etc.
3. Hook up the database....

## Working Notes

Might setup a SQLite database to start things off for really quick prototyping. I am not sure how this might impact various hosting options that I might use (Vercel, fly.io, Railway, etc.)

## Storage Setup

I am going to try BetterSqlite3 to start things off with drizzle, and see how this works when hooking it up to the simple authentication that we setup earlier.
