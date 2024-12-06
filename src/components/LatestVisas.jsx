import VisaCard from "./VisaCard";

const LatestVisas = () => {
  const visas = [
    {
      country: "Canada",
      countryImage: "https://example.com/canada.jpg",
      visaType: "Student Visa",
      processingTime: "4-6 weeks",
      fee: "$150",
      validity: "5 years",
      applicationMethod: "Online",
    },
    {
      country: "Australia",
      countryImage: "https://example.com/australia.jpg",
      visaType: "Work Visa",
      processingTime: "2-4 weeks",
      fee: "$200",
      validity: "2 years",
      applicationMethod: "In-Person",
    },
    // Add more visa objects here...
  ];

  return (
    <section className="py-[50px]">
      <div className="container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {visas.map((visa, index) => (
          <VisaCard key={index} {...visa} />
        ))}
      </div>
    </section>
  );
};

export default LatestVisas;
