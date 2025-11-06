import React from "react";
import AppRouter from "./routes/AppRouter";
import SiteLayout from "./layouts/SiteLayout";

export default function App() {
  return (
    <SiteLayout>
      <AppRouter />
    </SiteLayout>
  );
}
