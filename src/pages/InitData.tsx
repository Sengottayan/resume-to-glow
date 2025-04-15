
import { useState } from 'react';
import { initializeResumeData } from '@/utils/resumeInitialData';
import { Link } from 'react-router-dom';

const InitData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleInitData = async () => {
    setIsLoading(true);
    try {
      const success = await initializeResumeData();
      if (success) {
        setResult({
          success: true,
          message: "Resume data initialized successfully! You can now go to the portfolio."
        });
      } else {
        throw new Error("Failed to initialize data");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult({
        success: false,
        message: "An error occurred while initializing the data. Please check the console for details."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-portfolio-blue mb-6 text-center">
          Initialize Resume Data
        </h1>
        
        <p className="mb-6 text-gray-700">
          This page will initialize your resume data in Firebase. Click the button below to populate your Firebase database with all your resume information.
        </p>
        
        {result && (
          <div 
            className={`p-4 mb-6 rounded-lg ${
              result.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {result.message}
          </div>
        )}
        
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleInitData}
            disabled={isLoading}
            className="bg-portfolio-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-portfolio-darkBlue transition duration-300 disabled:opacity-70"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Initializing...
              </span>
            ) : (
              "Initialize Resume Data"
            )}
          </button>
          
          {result?.success && (
            <Link 
              to="/"
              className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-green-700 transition duration-300"
            >
              Go to Portfolio
            </Link>
          )}
          
          <Link 
            to="/"
            className="text-portfolio-blue text-center hover:underline"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InitData;
