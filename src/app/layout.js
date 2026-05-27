import "./globals.css";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "NestFinder - Smart Real Estate Discovery",
  description: "Find your dream home with AI-powered matching.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
