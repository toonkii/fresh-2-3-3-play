import { define } from "../utils.ts";

export default define.page(function App({ Component }) {
  return (
    <html data-theme="corporate">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DaisyUI Fresh2</title>
      </head>
      <body class="container mx-auto h-screen">
        <Component />
      </body>
    </html>
  );
});