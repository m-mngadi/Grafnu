import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default function PricingPage() {
  const { userId } = auth();
  return (
    <main className="flex flex-col hero bg-base-200 p-12 md:p-24">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Afforable pricing built for businesses on a bugdet
      </h1>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="flex flex-col-reverse border-2 border-white rounded-lg select-none w-full max-w-md p-2">
          <div className="flex flex-col items-center justify-center py-8 bg-base-100 rounded-lg size-52 gap-4 w-full">
            <span className="text-2xl font-semibold">Budget</span>
            {userId ? (
              <Link href="/c/create">
                <button className="btn btn-neutral">Create Campaign</button>
              </Link>
            ) : (
              <Link href="/sign-up">
                <button className="btn btn-neutral">Get Started</button>
              </Link>
            )}
          </div>
          <div className="flex flex-col items-center justify-center py-8 px-4 rounded-lg size-52 w-full">
            <span className="text-center text-3xl font-bold">$10 /day</span>
            <span className="text-center text-sm align-baseline gap-2">
              based on campaign duration 14 day or more
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse border-2 border-white rounded-lg select-none w-full max-w-md p-2">
          <div className="flex flex-col items-center justify-center py-8 bg-base-100 rounded-lg size-52 gap-4 w-full">
            <span className="text-2xl font-semibold">Standard</span>
            {userId ? (
              <Link href="/c/create">
                <button className="btn btn-neutral">Create Campaign</button>
              </Link>
            ) : (
              <Link href="/sign-up">
                <button className="btn btn-neutral">Get Started</button>
              </Link>
            )}
          </div>
          <div className="flex flex-col items-center justify-center py-8 px-4 rounded-lg size-52 w-full">
            <span className="text-center text-3xl font-bold">$15 /day</span>
            <span className="text-center text-sm align-baseline gap-2">
              based on campaign duration
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
