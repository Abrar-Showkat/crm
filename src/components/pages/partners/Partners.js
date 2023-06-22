import Search from "../../search/search";
import DelgateModal from "../../modals/delegate";
import DelegateTable from "../../tables/DelegateTable";

export default function Partners() {
  const dataSource = [
    {
      key: "1",
      image: "https://picsum.photos/id/237/200/300",
      name: "Mike Hannigan",
      company: "Friends",
      designation: "Actor",
      region: "10 Downing Street",
      priority: 1,
      featured: "false",
    },

    {
      key: "2",
      image: "https://picsum.photos/seed/picsum/200/300",
      name: "Pheobe Buffay",
      age: 42,
      company: "Friends",
      designation: "Actress",
      region: "10 Downing Street",
      priority: 2,
      featured: "false",
    },
  ];

  return (
    <div className="delegate-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Search />
        </div>
        <DelgateModal title={"Partner"} />
      </div>
      <DelegateTable title={"partners"} data={dataSource} />
    </div>
  );
}
