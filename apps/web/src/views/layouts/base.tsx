import type { FC } from "hono/jsx";

export const BaseLayout: FC = ({ children }) => (
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>nagauta-stack</title>
      <link rel="stylesheet" href="/public/styles.css" />
      <script src="https://unpkg.com/htmx.org@2.0.4"></script>
    </head>
    <body class="bg-gray-50 min-h-screen text-gray-900">
      {children}
    </body>
  </html>
);
