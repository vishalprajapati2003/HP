import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; 

const steps = [
  "Pick Your Destination",
  "What's the Duration of Your Holiday?",
  "Who Is Travelling With You?",
  "Find the City",
  "Review",
];

const packageOptions = {
  destination: ["Maldives", "Switzerland", "Thailand", "Bali"],
  duration: ["3 Days", "5 Days", "7 Days"],
  travelWith: ["Solo", "Couple", "Family", "Friends"],
  city: ["New York", "London", "Paris", "Tokyo"],
};

// Destination details with images and descriptions
const destinationDetails = [
  {
    name: "Maldives",
    image: "https://picsum.photos/400/300?random=1",
    description:
      "A tropical paradise with crystal-clear waters, white sandy beaches, and luxurious overwater villas.",
    highlights: ["Snorkeling", "Spa Retreats", "Private Beaches"],
  },
  {
    name: "Switzerland",
    image: "https://picsum.photos/400/300?random=2",
    description:
      "Breathtaking alpine landscapes, charming villages, and world-class skiing destinations.",
    highlights: ["Skiing", "Mountain Hiking", "Chocolate Tours"],
  },
  {
    name: "Thailand",
    image: "https://picsum.photos/400/300?random=3",
    description:
      "A vibrant country known for its rich culture, stunning temples, and bustling street markets.",
    highlights: ["Temple Visits", "Street Food", "Island Hopping"],
  },
  {
    name: "Bali",
    image: "https://picsum.photos/400/300?random=4",
    description:
      "An Indonesian island famous for its lush rice terraces, ancient temples, and vibrant nightlife.",
    highlights: ["Yoga Retreats", "Waterfalls", "Beach Parties"],
  },
];

// City details with images and descriptions
const cityDetails = [
  {
    name: "New York",
    image: "https://picsum.photos/400/300?random=5",
    description:
      "The city that never sleeps, known for its iconic skyline, Broadway shows, and diverse culture.",
    highlights: ["Statue of Liberty", "Central Park", "Times Square"],
  },
  {
    name: "London",
    image: "https://picsum.photos/400/300?random=6",
    description:
      "A historic city with a blend of modern and traditional architecture, famous for its royal heritage.",
    highlights: ["Big Ben", "London Eye", "Buckingham Palace"],
  },
  {
    name: "Paris",
    image: "https://picsum.photos/400/300?random=7",
    description:
      "The city of love, renowned for its art, fashion, and iconic landmarks like the Eiffel Tower.",
    highlights: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
  },
  {
    name: "Tokyo",
    image: "https://picsum.photos/400/300?random=8",
    description:
      "A bustling metropolis where tradition meets technology, offering a unique cultural experience.",
    highlights: ["Shibuya Crossing", "Tokyo Tower", "Senso-ji Temple"],
  },
];

export default function CustomizePackage() {
    const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    destination: "",
    duration: "",
    travelWith: "",
    city: "",
    familyDetails: { men: 0, women: 0, children: 0 },
  });

  const handleSelectChange = (category, value) => {
    setSelectedOptions((prev) => ({ ...prev, [category]: value }));
  };

  const handleFamilyDetailsChange = (field, value) => {
    setSelectedOptions((prev) => ({
      ...prev,
      familyDetails: { ...prev.familyDetails, [field]: value },
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate("/"); // Redirect to home when "Confirm Package" is clicked
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const isReviewStep = step === steps.length - 1;

  const progressPercentage = (step / (steps.length - 1)) * 100;

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <label className="block text-lg font-medium mb-4 text-gray-800">
              {steps[step]}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destinationDetails.map((destination) => (
                <motion.div
                  key={destination.name}
                  className="cursor-pointer relative"
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    handleSelectChange("destination", destination.name)
                  }
                >
                  {selectedOptions.destination === destination.name && (
                    <div className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                  <Card className="h-full">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {destination.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {destination.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 1:
      case 2:
        const currentStepKey = Object.keys(packageOptions)[step];
        return (
          <div>
            <label className="block text-lg font-medium mb-4 text-gray-800">
              {steps[step]}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {packageOptions[currentStepKey].map((option) => (
                <motion.div
                  key={option}
                  className="cursor-pointer relative"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSelectChange(currentStepKey, option)}
                >
                  {selectedOptions[currentStepKey] === option && (
                    <div className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                  <Card className="h-full">
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{option}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block text-lg font-medium mb-4 text-gray-800">
              {steps[step]}
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cityDetails.map((city) => (
                <motion.div
                  key={city.name}
                  className="cursor-pointer relative"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSelectChange("city", city.name)}
                >
                  {selectedOptions.city === city.name && (
                    <div className="absolute top-2 right-2 z-10 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  )}
                  <Card className="h-full">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {city.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {city.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {city.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 4:
            return (
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                  Your Selection
                </h2>
                <div className="space-y-3 text-lg text-gray-700">
                  <p>
                    <span className="font-medium text-blue-700">
                      Destination:
                    </span>{" "}
                    {selectedOptions.destination}
                  </p>
                  <p>
                    <span className="font-medium text-blue-700">Duration:</span>{" "}
                    {selectedOptions.duration}
                  </p>
                  <p>
                    <span className="font-medium text-blue-700">
                      Travel With:
                    </span>{" "}
                    {selectedOptions.travelWith}
                  </p>
                  <p>
                    <span className="font-medium text-blue-700">City:</span>{" "}
                    {selectedOptions.city}
                  </p>
                </div>
              </div>
            );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <motion.h1
        className="text-4xl font-bold mb-8 text-blue-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Customize Your Package
      </motion.h1>

      {/* Step Indicator with Progress Line */}
      <div className="w-full max-w-2xl mb-8 relative">
        <div className="flex justify-between">
          {steps.map((s, index) => (
            <div key={s} className="flex flex-col items-center relative z-10">
              <motion.div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold ${
                  index <= step ? "bg-blue-600" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {index + 1}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Progress Line */}
        <div className="absolute top-5 left-0 h-1 bg-gray-300 rounded-full w-full"></div>
        <motion.div
          className="absolute top-5 left-0 h-1 bg-blue-600 rounded-full"
          style={{ width: `${progressPercentage}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>

      {/* Main Card */}
      <Card className="w-full max-w-2xl p-6 shadow-2xl rounded-xl bg-white">
        <CardContent className="mt-6">
          {renderStepContent()}

          <div className="mt-8 flex justify-between">
            {step > 0 && <Button onClick={prevStep}>Back</Button>}
            <Button onClick={nextStep} >
                          {isReviewStep ? "Confirm Package" : "Next"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
