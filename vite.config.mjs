// import { defineConfig } from 'npm:vite';
// import react from 'npm:@vitejs/plugin-react';

// import "npm:react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })

import { defineConfig } from 'npm:vite';
import preact from 'npm:@preact/preset-vite';

import "npm:preact";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()]
})
