interface Props {
  params: { id: string };
  searchParams: { name: string; age: number };
}

const PropertyDetailPage = ({ params, searchParams }: Props) => {
  console.log(searchParams);
  return (
    <div>
      PropertyDetailPage {params.id} {searchParams.name} {searchParams.age}
    </div>
  );
};

export default PropertyDetailPage;
