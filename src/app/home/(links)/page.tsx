import { LinkTable } from "./LinkTable";
import { LinkRowType, LinkTableColumns } from "./LinkTableColumns";

const page = ({}) => {
  const links: LinkRowType[] = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    category: "Category " + i,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.  " + i,
    link: "https://google.com",
  }));

  return (
    <div className="h-full flex justify-center items-center">
      <LinkTable columns={LinkTableColumns} data={links} />
    </div>
  );
};

export default page;
