const { defineConfig } = require("vite");
const reactPlugin = require("@vitejs/plugin-react");
const sass = require("sass");

// Your Vite configuration
module.exports = defineConfig({
  plugins: [
    reactPlugin(),
    // Your other plugins and configurations
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "src/styles/variables.scss";`,
        implementation: sass,
      },
    },
  },
});
