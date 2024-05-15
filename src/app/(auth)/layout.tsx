import Navbar from "@/components/Navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar logoOnly />
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
    </>
  );
}
