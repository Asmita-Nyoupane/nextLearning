export default function DashboardLayout({
  children,
  user,
  revenue,
  notification,
}: Readonly<{
  user: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-red-50">
        <div>{children}</div>
        <div className="flex justify-around  px-20 py-10 ">
          <div className="flex flex-col gap-10">
            <div>{user}</div>
            <div>{revenue}</div>
          </div>
          <div>{notification}</div>
        </div>
      </body>
    </html>
  );
}
