import PropertyCard from "@/components/server/PropertyCard/PropertyCard";
import IPropertyListing from "@/lib/interfaces/IPropertyListing";
import listingData from "../data/mock/listing"

async function getListing() {
  return listingData;
}

function mapResponse(data: any): IPropertyListing[] {
  return data.map((d: any): IPropertyListing => {
    return {
      pics: d.pic,
      title: d.title,
      address: d.address,
      projectType: d.project_type,
      year: d.year,
      ownershipType: d.ownership_type,
      psfMin: d.psf_min,
      psfMax: d.psf_max,
      subpriceLabel: d.subprice_label,
      availabilitiesLabel: d.availabilities_label,
      description: d.description,
    };
  });
}

export default async function Homepage() {
  const { result } = await getListing();
  const listings: IPropertyListing[] = mapResponse(result);
  return (
    <main className="container m-auto p-10">
      <div className="flex gap-5 flex-wrap md:flex-nowrap">
        {listings.map((listing) => (
          <div className="w-full md:w-1/2">
            <PropertyCard {...listing} />
          </div>
        ))}
      </div>
    </main>
  );
}
