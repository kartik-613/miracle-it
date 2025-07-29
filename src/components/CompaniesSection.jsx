import React from "react";

const companies = [
  { name: "Google", logo: "/images/companies/google.png" },
  { name: "Cognizant", logo: "/images/companies/cognizant.png" },
  { name: "Accenture", logo: "/images/companies/accenture.png" },
  { name: "Wipro", logo: "/images/companies/wipro.png" },
  { name: "HCL", logo: "/images/companies/hcl.png" },
  { name: "Infosys", logo: "/images/companies/infosys.png" },
  { name: "TCS", logo: "/images/companies/tcs.png" },
  { name: "Tech Mahindra", logo: "/images/companies/techmahindra.png" },
  { name: "IBM", logo: "/images/companies/ibm.png" },
  { name: "Capgemini", logo: "/images/companies/capgemini.png" },
  { name: "Amazon", logo: "/images/companies/amazon.png" },
  { name: "Flipkart", logo: "/images/companies/flipkart.png" }
];

const CompaniesSection = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-medium mb-8">
          <span className="font-bold underline">Companies</span>{" "}
          You Can Apply For
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-center mb-6">
          {companies.map((company, index) => (
            <div key={index} className="flex justify-center items-center h-16">
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-[120px] object-contain"
              />
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-600">
          You Can Apply For The Above Listed Companies + Thousands Of More Companies.
        </p>
      </div>
    </section>
  );
};

export default CompaniesSection;
