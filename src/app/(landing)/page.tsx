import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col grow hero bg-base-200 p-12 md:p-24">
      <div className="hero-content justify-start flex-col md:flex-row w-full select-none">
        <div className="text-center md:text-start">
          <h1 className="flex flex-col text-4xl md:text-6xl font-bold text-balance">
            <span>Growth hacking, </span>
            <span>productized.</span>
          </h1>
          <p className="py-6 md:max-w-lg md:text-wrap text-lg md:text-2xl text-pretty">
            A low-cost strategy for businesses that helps your team acquire new
            customers by leveraging organic marketing.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-2 w-full">
            <Link href="/sign-up">
              <button className="btn btn-neutral">Get Started</button>
            </Link>
            <button className="btn btn-ghost">Learn More</button>
          </div>
          <div className="flex gap-2 mt-2 text-sm justify-center md:justify-start">
            60% off your first campaign*
          </div>
        </div>
      </div>
    </main>
  );
}
