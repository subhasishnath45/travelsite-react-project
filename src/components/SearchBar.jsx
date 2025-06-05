import { useState } from "react"; // React hook for state
import { motion, AnimatePresence } from "framer-motion"; // Animation utilities
import Lottie from "lottie-react";
import roundTravel from "../assets/round-travel.json";

// Tabs available in the search bar
const TABS = ["Flights", "Cars", "Villas", "Nightlife", "eSIM"];

// City list with emoji flags
const CITIES = [
  { name: "Dubai", flag: "🇦🇪" },
  { name: "London", flag: "🇬🇧" },
  { name: "Paris", flag: "🇫🇷" },
  { name: "New York", flag: "🇺🇸" },
];

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("Flights"); // Currently selected tab
  const [selectedCity, setSelectedCity] = useState(CITIES[0]); // Selected city
  const [isLoading, setIsLoading] = useState(false); // Loading state for search

  // Simulate search action
  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Searching for ${activeTab} in ${selectedCity.name}`);
    }, 1500); // Simulated loading delay
  };

  return (
    <section className="min-h-[100vh] w-dvw max-w-full bg-blue text-white relative flex items-center justify-center px-4 overflow-x-hidden overflow-y-hidden">
      <Lottie
        animationData={roundTravel}
        loop
        className="absolute inset-0 w-full max-w-full h-dvh object-contain z-0 scale-120 overflow-hidden"
      />
      <div className="bg-white text-black rounded-2xl shadow-lg w-full max-w-3xl p-6 space-y-6 relative z-10">

        {/* === Tab Switcher === */}
        <div className="flex justify-between border-b border-gray-200">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-4 transition-all font-medium ${
                activeTab === tab
                  ? "text-primary border-b-2 border-primary" // Active tab
                  : "text-gray-400" // Inactive tabs
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* === Form Fields with Morph Transitions === */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab} // Animate based on changing key
            initial={{ opacity: 0, y: 20 }} // Enter transition
            animate={{ opacity: 1, y: 0 }}   // Animate in
            exit={{ opacity: 0, y: -20 }}    // Exit animation
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {/* City Selector with Emoji */}
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <select
                className="w-full border px-3 py-2 rounded-md"
                value={selectedCity.name}
                onChange={(e) => {
                  const city = CITIES.find((c) => c.name === e.target.value);
                  if (city) setSelectedCity(city);
                }}
              >
                {CITIES.map((city) => (
                  <option key={city.name} value={city.name}>
                    {city.flag} {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Field Label Changes Based on Tab */}
            <div>
              <label className="block text-sm font-medium mb-1">
                {activeTab === "Flights"
                  ? "Departure Date"
                  : activeTab === "Cars"
                  ? "Pickup Date"
                  : activeTab === "Villas"
                  ? "Check-in Date"
                  : activeTab === "Nightlife"
                  ? "Event Date"
                  : "Plan Start Date"}
              </label>
              <input
                type="date"
                className="w-full border px-3 py-2 rounded-md"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* === Search Button with Expanding Loading Animation === */}
        <motion.button
          onClick={handleSearch}
          whileHover={{ scale: 1.05 }} // Hover effect
          whileTap={{ scale: 0.95 }}  // Click effect
          className="w-full bg-blue text-red py-3 rounded-md flex items-center justify-center text-xl uppercase font-bold"
        >
          {isLoading ? (
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          ) : (
            "Search"
          )}
        </motion.button>
      </div>
    </section>
  );
};

export default SearchBar;
