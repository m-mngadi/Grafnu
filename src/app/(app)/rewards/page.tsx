import Link from "next/link";
import { IconExternalLink } from "@tabler/icons-react";

const RewardsPage = () => {
  return (
    <div className="flex flex-grow flex-col p-4 gap-2 w-full">
      <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4 p-4">
        <div className="flex flex-col gap-3 px-4 py-2 rounded-lg row-span-1">
          <div className="flex justify-start text-xl font-bold">Overview</div>
          <div className="grid grid-cols-2 gap-4 pb-2">
            <div className="flex flex-col justify-between">
              <span className="pb-2 font-semibold">Rewards this month</span>
              <span className="text-xl font-bold">$ 0.00</span>
            </div>
            <div className="flex flex-col justify-between">
              <span className="pb-2 font-semibold">Total rewards</span>
              <span className="text-xl font-bold">$ 0.00</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-4 py-2 rounded-lg row-span-3">
          <div className="flex justify-start text-xl font-bold">
            Reward history
          </div>
          {/* Table of rewards here */}
        </div>
        <div className="flex flex-col gap-3 px-4 py-2 rounded-lg row-span-2">
          <div className="flex justify-start text-xl font-bold">
            Update payment method
          </div>
          <div className="flex flex-col">
            <span className="text-gray-400">
              You may update your payment method at any time. All cash rewards
              are subject to local tax imposed by the country where you opened
              your account.
            </span>
          </div>
          <div className="flex flex-col">
            <Link
              href=""
              className="flex items-center max-w-36 gap-2 px-3 py-3 justify-center rounded-lg text-sm bg-neutral text-white border border-white"
            >
              Update
              <IconExternalLink />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RewardsPage;
