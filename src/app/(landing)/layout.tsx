import InAppNavbar from "@/components/InAppNavbar";
import LandingNavbar from "@/components/LandingNavbar";
import { auth } from "@clerk/nextjs/server";

export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  return (
    <>
      <div className="flex grow justify-center">
        {userId ? <InAppNavbar /> : <LandingNavbar />}
      </div>
      {children}
    </>
  );
}
