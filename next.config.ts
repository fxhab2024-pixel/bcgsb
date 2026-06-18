import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel handles the build output automatically — no need for "standalone"
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,

  // ─── Security Headers ───────────────────────────────────────────
  // Recommended by OWASP and Mozilla Observatory.
  // These headers protect against XSS, clickjacking, MIME-sniffing, etc.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Force HTTPS for 1 year (incl. subdomains + preload list)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking via iframe
          { key: "X-Frame-Options", value: "DENY" },
          // Disable XSS filtering (browsers' XSS Auditor was buggy; CSP is the modern approach)
          { key: "X-XSS-Protection", value: "0" },
          // Restrict referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict browser features (camera, mic, geolocation)
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          // Content Security Policy — restrictive default
          // Allows self + inline styles (Tailwind needs this) + Vercel analytics
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://vercel.live wss://vercel.live",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "base-uri 'self'",
              "object-src 'none'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
