import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconPlayerPlay, IconCoins, IconPlus } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const ViewPage = () => {
  return (
    <div className="flex flex-grow md:p-4 gap-2 w-full">
      <Tabs defaultValue="overview" className="flex flex-col md:flex-row grow">
        <TabsList className="flex md:flex-col md:w-3/12 min-w-48 md:max-w-60 bg-transparent relative h-12 md:h-full justify-around md:justify-start border-b md:border-r border-neutral-content rounded-none">
          <TabsTrigger
            value="overview"
            className="btn btn-ghost w-fit md:w-full"
          >
            Overview
          </TabsTrigger>

          <TabsTrigger
            value="leaderboard"
            className="btn btn-ghost w-fit md:w-full"
          >
            Leaderboard
          </TabsTrigger>

          <TabsTrigger value="entry" className="btn btn-ghost w-fit md:w-full">
            Entry
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="overview"
          className="data-[state=active]:flex data-[state=active]:flex-col data-[state=active]:grow"
        >
          <header className="flex justify-between px-4 py-2 rounded-lg items-center">
            <h3 className="text-2xl border-neutral-content border-l-2 pl-2">
              Overview
            </h3>
            <div className="flex items-center gap-2">
              <span className="badge badge-success text-neutral-content font-semibold h-10 py-2">
                Active
              </span>
              {/* <span className="badge bg-base-300 text-base-content font-semibold h-10 py-2">
                Pending
              </span> */}
            </div>
          </header>
          <section className="max-w-7xl w-full h-full px-4 pb-4">
            <div className="flex flex-col gap-2 text-lg">
              <div className="flex flex-row w-full gap-2">
                {/* <Link
                  href=""
                  className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg text-sm btn btn-neutral border border-base-content h-[48px]"
                >
                  <IconPlayerPlay />
                  <span className="inline">Join</span>
                </Link> */}
                <Link
                  href=""
                  className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg text-sm btn btn-neutral border border-base-content h-[48px]"
                >
                  <IconCoins />
                  <span className="inline-flex items-center">
                    Load Prize Pool
                  </span>
                </Link>
                {/* <Link
                  href=""
                  className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg text-sm btn btn-neutral border border-base-content h-[48px]"
                >
                  <span className="inline">Publish</span>
                </Link>
                <Button
                  variant={"ghost"}
                  className="flex items-center gap-2 px-4 py-2 w-fit rounded-lg text-sm btn btn-error btn-outline h-[48px]"
                >
                  <span className="inline">Delete</span>
                </Button> */}
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Title
                </p>
                <p className="font-semibold">Grafnu Launch Campaign</p>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Website Link
                </p>
                <p className="font-semibold">https://grafnu.com</p>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Description
                </p>
                <p className="font-semibold">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <p className="text-2xl border-neutral-content border-l-2 pl-2">
                Requirements
              </p>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Video Length
                </p>
                <p className="font-semibold">30 seconds</p>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Video Hashtags
                </p>
                <p className="font-semibold">graftnu, ad, rewards</p>
              </div>
              <p className="text-2xl border-neutral-content border-l-2 pl-2">
                Duration
              </p>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Start date
                </p>
                <p className="font-semibold">19 May 2024</p>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  End date
                </p>
                <p className="font-semibold">30 May 2024</p>
              </div>
              <p className="text-2xl border-neutral-content border-l-2 pl-2">
                Prize Pool
              </p>
              <div className="flex flex-col md:flex-row w-full gap-4">
                <p className="flex flex-grow-0 text-base-content min-w-32">
                  Amount
                </p>
                <p className="font-semibold">None</p>
              </div>
            </div>
          </section>
        </TabsContent>
        <TabsContent
          value="leaderboard"
          className="data-[state=active]:flex data-[state=active]:flex-col data-[state=active]:grow"
        >
          <header className="flex gap-2 px-4 py-2 rounded-lg items-center">
            <h3 className="text-2xl border-neutral-content border-l-2 pl-2">
              Leaderboard
            </h3>
          </header>
          <section className="max-w-7xl w-full h-full px-4 pb-4">
            <div className="flex flex-col gap-2 text-lg">
              Leaderboard Section
            </div>
          </section>
        </TabsContent>
        <TabsContent
          value="entry"
          className="data-[state=active]:flex data-[state=active]:flex-col data-[state=active]:grow"
        >
          <header className="flex gap-2 px-4 py-2 rounded-lg items-center">
            <h3 className="text-2xl border-neutral-content border-l-2 pl-2">
              Entry
            </h3>
          </header>
          <section className="max-w-7xl w-full h-full px-4 pb-4">
            <div className="flex flex-col gap-2 text-lg">Entry Section</div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ViewPage;
