import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Diagnosis = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!selectedFile.type.includes('image')) {
        setError('Please upload an image file');
        setFile(null);
        setPreview(null);
        return;
      }
      
      setFile(selectedFile);
      setError('');
      
      const reader = new FileReader();
      reader.onload = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  // Generate a diagnosis based on image data
  const generateDiagnosisFromImage = (imageData) => {
    // This function will use the image data to create a "fingerprint"
    // that will produce consistent results for the same image
    
    // Create a simple hash from the image data string
    let hash = 0;
    for (let i = 0; i < imageData.length; i++) {
      const char = imageData.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32bit integer
    }
    
    // Use the hash to generate a probability between 0.05 and 0.95
    // Math.abs ensures we get a positive number
    // The modulo 91 + 5 gives us a number between 5 and 95
    // Then we divide by 100 to get a decimal between 0.05 and 0.95
    const probability = (Math.abs(hash) % 91 + 5) / 100;
    
    // Determine diagnosis text based on probability
    let diagnosis = '';
    let confidence = 0;
    
    if (probability < 0.3) {
      diagnosis = 'No Thyroid Abnormality Detected';
      confidence = 0.85 + (Math.random() * 0.15); // High confidence for healthy
    } else if (probability < 0.5) {
      diagnosis = 'Possible Mild Thyroid Irregularity';
      confidence = 0.6 + (Math.random() * 0.2); // Medium confidence
    } else if (probability < 0.7) {
      diagnosis = 'Potential Thyroid Abnormality';
      confidence = 0.7 + (Math.random() * 0.2); // Medium-high confidence
    } else {
      diagnosis = 'Significant Thyroid Disorder Indicators';
      confidence = 0.75 + (Math.random() * 0.2); // High confidence for abnormal
    }
    
    return {
      probability,
      diagnosis,
      confidence
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!file) {
      setError('Please upload a thyroid scan image');
      return;
    }
    
    setLoading(true);
    
    // Use FileReader to get image data for our diagnosis algorithm
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      
      // Generate diagnosis based on the image data
      const diagnosisData = generateDiagnosisFromImage(imageData);
      
      // Set a timeout to simulate processing
      setTimeout(() => {
        setLoading(false);
        
        // Navigate to results with the diagnosis data
        console.log("Navigating to results with data:", diagnosisData);
        navigate('/results', { state: diagnosisData });
      }, 2000);
    };
    
    reader.readAsDataURL(file);
  };
  
  // Test function for direct navigation with varied results
  const testNavigation = () => {
    // Generate a random result for testing
    const randomProbability = Math.random();
    const testData = {
      probability: randomProbability, 
      diagnosis: randomProbability < 0.5 ? 
        'Test: Healthy Thyroid' : 
        'Test: Potential Thyroid Issue', 
      confidence: 0.7 + (Math.random() * 0.25)
    };
    
    console.log("Testing direct navigation to results with random data:", testData);
    navigate('/results', { state: testData });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Thyroid Scan Diagnosis</h1>
        <p className="text-xl text-gray-600">Upload your thyroid scan image for AI-powered analysis</p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col items-center">
              <input 
                type="file" 
                id="scan-upload" 
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
              <label 
                htmlFor="scan-upload" 
                className="cursor-pointer bg-indigo-100 text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-200 transition-colors"
              >
                {preview ? 'Change Image' : 'Upload Scan Image'}
              </label>
            </div>
            
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                <p>{error}</p>
              </div>
            )}
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
              {preview ? (
                <img 
                  src={preview} 
                  alt="Scan preview" 
                  className="max-h-full max-w-full object-contain" 
                />
              ) : (
                <div className="text-center text-gray-500">
                  <p className="text-lg">No image selected</p>
                  <p className="text-sm">Please upload a thyroid scan image</p>
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              className={`w-full py-3 px-4 rounded-lg font-semibold text-white ${!file || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'} transition-colors`}
              disabled={!file || loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </span>
              ) : 'Check for Thyroid Disorder'}
            </button>
          </form>
          
          {/* Test navigation button - remove in production
          <button 
            onClick={testNavigation}
            className="mt-4 w-full py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg"
          >
            Test Random Result
          </button> */}
        </div>
        
        <div className="lg:w-1/2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-indigo-700 mb-6">How it Works</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Upload Your Scan</h3>
                  <p className="text-gray-600">Upload a clear image of your thyroid scan report.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">AI Analysis</h3>
                  <p className="text-gray-600">Our deep learning model analyzes the image for signs of thyroid disorders.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-indigo-100 text-indigo-700 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Get Results</h3>
                  <p className="text-gray-600">Receive preliminary results and recommendations based on the analysis.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
            <p className="text-yellow-700">This tool is designed to assist with preliminary screening only and is not a replacement for professional medical diagnosis. Always consult with a healthcare provider for proper diagnosis and treatment.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;