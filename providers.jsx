// app/providers.jsx
"use client"; // This marks it as a Client Component

import { ThemeProvider } from 'next-themes';

export function Providers({ children }) {
  return (
    <ThemeProvider 
      attribute="class" // This will add .light or .dark to the <html> tag
      defaultTheme="light" // Our primary mode is light
      enableSystem={true} // It can also respect the user's OS setting
    >
      {children}
    </ThemeProvider>
  );
}