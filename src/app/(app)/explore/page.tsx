import FilterBy from "@/components/FilterBy";
import SortBy from "@/components/SortBy";

const ExplorePage = () => {
  return (
    <div className="flex flex-grow flex-col p-4 gap-2 w-full">
      <header className="flex flex-col justify-end gap-2 px-4 py-2 rounded-lg md:flex-row">
        <div className="w-full md:w-[200px]">
          <FilterBy
            defaultValue="recent"
            label="Filter by"
            items={[
              { value: "recent", label: "Recently added" },
              { value: "participantCount", label: "Participants" },
            ]}
          />
        </div>
        <div className="w-full md:w-[200px]">
          <SortBy />
        </div>
      </header>
      <section className="max-w-7xl w-full h-full"></section>
    </div>
  );
};

export default ExplorePage;
