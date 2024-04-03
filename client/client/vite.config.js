import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     global: "globalThis",
//     "process.env": {},
//   },
//   esbuild: {
//     target: 'es2020', // or 'esnext'
//   },
// });

export default ({ mode }) => {

  return defineConfig({
    
    optimizeDeps: { // 👈 optimizedeps
      esbuildOptions: {
        target: "esnext", 
        // Node.js global to browser globalThis
        define: {
          global: 'globalThis'
        },
        supported: { 
          bigint: true 
        },
      }
    }, 

    build: {
      target: ["esnext"], // 👈 build.target
    },
  })
}