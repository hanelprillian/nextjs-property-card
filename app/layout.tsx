import "./globals.css";
import { avenir } from "../lib/fonts";

export const metadata = {
  title: "Property",
  description: "Using Next13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={avenir.className}>{children}</body>
    </html>
  );
}
