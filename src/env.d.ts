/// <reference types="vite/client" />

// Type declarations for import.meta.env
interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}