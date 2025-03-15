import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import SessionProvider from "../providers/sessionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://quick-chatting-app.vercel.app/"),
  title: { default: "Quick Chatting APP", template: "%s | Quick Chatting APP" },
  description: "Use this app to chat with your friends witout any hassle and login.",
  keywords: ["chat", "quick", "app", "chatting"],
  applicationName: "Quick Chatting APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>{children}</SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
