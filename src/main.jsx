import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://a4a04b0d188903ddcd272f0ec1ebd3ec@o4509092339843072.ingest.de.sentry.io/4509092342399056",
  integrations: [Sentry.browserTracingIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", new RegExp("^https://http://localhost:5174//api/")]
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
