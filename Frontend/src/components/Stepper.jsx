import { useState } from "react";
import { Home, FileText, LogIn, Edit, Download } from "lucide-react";
import { useNavigate } from "react-router-dom"; // If using React Router

const steps = [
  { id: 1, name: "Home", icon: <Home className="w-6 h-6" /> },
  { id: 2, name: "Create Invoice", icon: <FileText className="w-6 h-6" /> },
  { id: 3, name: "Login/Register", icon: <LogIn className="w-6 h-6" /> },
  { id: 4, name: "Fill Details", icon: <Edit className="w-6 h-6" /> },
  { id: 5, name: "Print/Download", icon: <Download className="w-6 h-6" /> },
];

export default function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate(); // Use React Router for navigation

  const isLoggedIn = false; // Replace with actual authentication check

  const handleNext = () => {
    if (currentStep === 2 && !isLoggedIn) {
      navigate("/login"); // Redirect to login if not authenticated
      return;
    }
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center text-center">
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full ${
                currentStep >= step.id ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-700"
              }`}
            >
              {step.icon}
            </div>
            <p className="mt-2 text-sm font-medium">{step.name}</p>
            {index < steps.length - 1 && (
              <div
                className={`absolute w-full h-1 top-6 left-1/2 -translate-x-1/2 ${
                  currentStep > step.id ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        {currentStep < steps.length && (
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Next Step
          </button>
        )}
      </div>
    </div>
  );
}
