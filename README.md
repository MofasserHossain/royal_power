# Royal Power - Static Website

A Next.js static website configured for cPanel hosting with the latest technologies.

## Tech Stack

- **Next.js 16.1.1** (latest) with Webpack
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** with color scheme
- **shadcn/ui** components
- **ESLint** + **Prettier** for code quality

## Features

- ✅ Static Site Generation (SSG) only - no SSR, no ISR
- ✅ Configured for cPanel static hosting
- ✅ Latest Next.js 16
- ✅ Latest Tailwind CSS v4 with custom color scheme
- ✅ shadcn/ui components ready
- ✅ ESLint + Prettier configured

## Getting Started

### Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

Run the development server with Webpack:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Build the static site:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

This will generate a static site in the `out/` directory.

### Code Quality

Lint your code:

```bash
pnpm lint
# or
npm run lint
```

Format your code:

```bash
pnpm format
# or
npm run format
```

## Deployment to cPanel

1. Build the static site:
   ```bash
   pnpm build
   ```

2. The static files will be in the `out/` directory.

3. Upload the contents of the `out/` directory to your cPanel `public_html` folder.

4. Ensure `index.html` is in the root of `public_html`.

5. Your site should now be live!

## Project Structure

```
royal_power/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles with Tailwind
│   ├── components/        # React components
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utility functions
├── public/               # Static assets
├── next.config.ts        # Next.js configuration (static export)
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
└── .prettierrc           # Prettier configuration
```

## Configuration

### Static Export

The project is configured for static export only. See `next.config.ts`:

- `output: "export"` - Enables static export
- `trailingSlash: true` - Better cPanel compatibility
- `images.unoptimized: true` - Required for static export

### Tailwind CSS

Tailwind CSS v4 is configured with a custom color scheme. Colors are defined in `src/app/globals.css` using CSS variables.

### shadcn/ui

shadcn/ui is configured and ready to use. Add components with:

```bash
npx shadcn@latest add [component-name]
```

## License

Private project.
