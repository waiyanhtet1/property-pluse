import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            variant="primary"
            title="For Renters"
            description="Find your dream rental property. Bookmark properties and contact
              owners."
            buttonInfo={{ link: "/properties", text: "Browse Properties" }}
          />
          <InfoBox
            variant="secondary"
            title="For Property Owners"
            description="List your properties and reach potential tenants. Rent as an
              airbnb or long term."
            buttonInfo={{ link: "/properties/add", text: "Add Property" }}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
