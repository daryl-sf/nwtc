export default function HofLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-center text-5xl font-extrabold">Hall of Fame</h1>
      {children}
    </div>
  );
}
