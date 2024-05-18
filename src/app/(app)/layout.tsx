import InAppNavbar from "@/components/InAppNavbar";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex grow justify-center">
        <InAppNavbar />
      </div>
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
    </>
  );
}
