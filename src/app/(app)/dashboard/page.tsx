import FilterBy from "@/components/FilterBy";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex flex-grow flex-col p-4 gap-2 w-full">
      <header className="flex flex-col-reverse justify-end gap-2 px-4 py-2 rounded-lg md:flex-row">
        <div className="w-full md:w-[200px]">
          <FilterBy
            defaultValue="all"
            label="Filter by"
            items={[
              { value: "all", label: "All Campaigns" },
              { value: "active", label: "Active Campaigns" },
              { value: "ended", label: "Ended Campaigns" },
            ]}
          />
        </div>
        <div className="flex">
          <Link
            href="/c/create"
            className="flex items-center gap-2 px-3 py-2 w-full md:w-fit rounded-lg text-sm bg-neutral border border-white text-white h-[48px]"
          >
            <IconPlus />
            New Campaign
          </Link>
        </div>
      </header>
      <section className="max-w-7xl w-full h-full"></section>
    </div>
  );
};

export default DashboardPage;
