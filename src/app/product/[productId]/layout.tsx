const generateRandom = (count: number) => {
  return Math.floor(Math.random() * count);
};

export default function ProductIdLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const random = generateRandom(2);
  if (random === 2) {
    throw new Error("Error in loading products");
  }
  return (
    <html lang="en">
      <body>
        {children}
        <h2 className="text-2xl font-bold flex justify-center items-center mt-10">
          Featured products
        </h2>
      </body>
    </html>
  );
}
