import "./styles/globals.css";
import "./styles/styleNull.css";

export const metadata = {
  title: "AutoHelp",
  description: "Auto-Help cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
