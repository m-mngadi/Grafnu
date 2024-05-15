import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="flex flex-col hero bg-base-200 p-12 md:p-24">
      <h1 className="text-4xl font-semibold mb-8 text-center">
        Afforable pricing built for businesses on a bugdet
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-fit border-2 border-white rounded-lg select-none w-full">
        <div className="flex flex-col items-center justify-center py-8 bg-base-100 md:rounded-tl-lg md:rounded-bl-lg size-52 gap-4 w-full">
          <span className="text-2xl font-semibold">Standard</span>
          <Link href="/sign-up">
            <button className="btn btn-neutral">Get Started</button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center py-8 px-4 md:rounded-tr-lg md:rounded-br-lg size-52 w-full">
          <div className="badge badge-primary badge-lg gap-2">60% off</div>
          <span className="text-center text-3xl font-bold">
            <span className="text-sm line-through">$25</span> $15
          </span>
          <span className="text-center text-sm align-baseline gap-2">
            per day based on campaign duration
          </span>
        </div>
      </div>
      <span className="flex flex-col text-sm align-baseline max-w-md text-balance text-center mt-2">
        <span className="underline">
          Discount is limited to the first 1000 campaigns over 7 days and less
          then 6 weeks.
        </span>
        Only applies to your first campaign hosted on Grafnu.
      </span>
    </main>
  );
}
