/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_TELEGRAM_MOCK?: "true" | "false";
    NODE_ENV: "development" | "production" | "test";
  }
}
