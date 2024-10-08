import LandingNavbar from "@/components/LandingNavbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex grow justify-center">
        <LandingNavbar logoOnly />
      </div>
      <main className="flex flex-col items-center justify-center max-w-7xl mx-auto min-h-screen">
        {children}
      </main>
    </>
  );
}
