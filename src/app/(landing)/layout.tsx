import Navbar from "@/components/Navbar";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex grow justify-center">
        <Navbar />
      </div>
      {children}
    </>
  );
}
