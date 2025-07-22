import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import "./styles/globals.css";
import "./styles/styleNull.css";

export const metadata = {
  title: "AutoHelp",
  description: "Auto-Help cards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
