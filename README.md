# <img src="public/favicon.ico" alt="Indikit" width="20" /> Indikit

Indikit is a starter kit for building a SaaS application with Next.js, TailwindCSS, Shadcn/UI, tRPC, Lucia Auth, Drizzle ORM, and Stripe. It is designed to be a starting point for building a modern, scalable, and secure SaaS application.

## Features
- [x] Deployable to CloudFlare pages
- [x] GitHub action for deployments
- [x] Subscription management
- [x] Email/password auth
- [x] PostHog analytics
- [ ] Google OAuth
- [ ] GitHub OAuth
- [ ] Magic link auth

## Technologies
- [Lucia auth](https://lucia-auth.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [tRPC](https://trpc.io/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Stripe](https://stripe.com/)
- [Resend](https://resend.com/)
- [Turso](https://turso.com/)
- [PostHog](https://posthog.com/)

## Support
If you find any issues or have any suggestions, jump on to [Discord](https://discord.gg/4ae2Esm6P7) or tag me on [X](https://x.com/tomdoes_tech).

This project is completely free to use with no restrictions, or warranties. If you want to support me you can buy me a coffee [here](https://buymeacoffee.com/tomn).

## Setup
### Stripe
Create an account and a project in Stripe. Create a new product and price. Update the variables in the .env file. For links to the billing portal to work, you need to save the settings here: https://dashboard.stripe.com/test/settings/billing/portal

### Turso
You can use any SQLlite database, but Turso is recommended because of it's simplicity and generous free tier. Sign up for an account, create a database and an auth token. Update the variables in the .env file.

### Resend
Resend is used for sending emails. Sign up for an account and update the variables in the .env file.

### CloudFlare Pages
You can easily deploy the application to CloudFlare Pages. Setup wrangler and run `pnpm deploy`. There is also a GitHub action that will deploy when you push to the main branch. You will need to configure the environment variables in the CloudFlare dashboard, set your account id and auth token in the GitHub action secrets.