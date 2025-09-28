import Footer from "./components/global/Footer";
import Header from "./components/global/Header";
import "./styles/globals.css";
import "./styles/styleNull.css";

export const metadata = {
  title: "AutoHelp",
  description: "Auto-Help cards",
  openGraph: {
    title: "AutoHelp",
    description: "Auto-Help cards",
    url: "https://auto-help.vercel.app/", // заміни на реальний URL проекту
    siteName: "AutoHelp",
    images: [
      {
        url: "https://i.postimg.cc/wxtb7BLQ/Screenshot-4.jpg",
        width: 1200,
        height: 627,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoHelp",
    description: "Auto-Help cards",
    images: ["https://i.postimg.cc/wxtb7BLQ/Screenshot-4.jpg"],
  },
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
