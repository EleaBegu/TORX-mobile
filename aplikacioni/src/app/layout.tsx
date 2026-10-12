import "./globals.css";

export const metadata = {
  title: "Torx - Menaxhimi i Stoqit",
  description: "Aplikacion për menaxhimin e vegllave dhe hardware",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sq">
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f9fafb" }}>
        {children}
      </body>
    </html>
  );
}
