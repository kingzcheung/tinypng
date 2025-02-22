
# TinyPNG - Browser-based PNG Compression Tool

#### Project Overview
TinyPNG is a browser-based tool for compressing PNG images. It operates entirely within the browser without requiring any backend services, ensuring that user data is never transmitted to external servers. The core compression algorithm is implemented using Rust + WebAssembly (WASM), while the frontend is built with Vue.js and Vite.

This is a small experiment to verify Rust WASM.


#### Technology Stack
- **Core Algorithm**: Rust + WebAssembly (WASM)
- **Frontend Framework**: Vue.js 3.x
- **Build Tool**: Vite
- **Development Environment**: TypeScript support

#### Features
- Pure frontend implementation with no backend dependency
- All image compression occurs within the browser, ensuring user privacy
- Drag-and-drop file upload support
- Real-time preview of compression results
- Display of file size comparison before and after compression

#### Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/kingzcheung/tinypng
   cd tinypng
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at `http://localhost:3000`

#### Building and Deployment
1. Build the production version:
   ```bash
   npm run build
   ```

2. Deploy the static files to a server or CDN


#### License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

#### Acknowledgments
Thank you to all the developers who have contributed to this project!
