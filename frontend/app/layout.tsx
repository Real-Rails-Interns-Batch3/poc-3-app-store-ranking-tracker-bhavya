import "./globals.css";

export const metadata = {
  title: "EV Intelligence Interface",
  description: "Cinematic EV Network Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}