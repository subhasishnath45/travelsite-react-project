import { useState } from "react";
import ServiceCard from "./ServiceCard";
import ServiceFilter from "./ServiceFilter";

const allServices = [
  {
    title: "Flights",
    description: "Book flights to and from Dubai.",
    stat: 120,
  },
  { title: "Cars", description: "Rent premium cars for your stay.", stat: 80 },
  {
    title: "Villas",
    description: "Reserve luxury villas with amenities.",
    stat: 80,
  },
  {
    title: "Nightlife",
    description: "Get tickets to exclusive nightclubs.",
    stat: 30,
  },
  {
    title: "eSIM",
    description: "Purchase eSIMs for seamless connectivity.",
    stat: 100,
  },
  {
    title: "Packages",
    description: "Explore curated travel packages.",
    stat: 50,
  },
];

const categories = [
  "All",
  "Flights",
  "Cars",
  "Villas",
  "Nightlife",
  "eSIM",
  "Packages",
];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter logic (optional - only if you want to filter services by category name)
  const filteredServices =
    selectedCategory === "All"
      ? allServices
      : allServices.filter((s) => s.title === selectedCategory);

  return (
    <section className="py-16 bg-red" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>

        {/* Filter UI (optional) */}
        <ServiceFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              index={index}
              stat={service.stat}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
