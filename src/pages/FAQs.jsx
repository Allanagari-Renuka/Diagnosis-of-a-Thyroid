import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import './FAQs.css';

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const toggleQuestion = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };
  
  const faqList = [
    {
      question: "What is the thyroid gland and what does it do?",
      answer: "The thyroid gland is a butterfly-shaped gland located in the front of the neck. It produces hormones that regulate your body's metabolism, which affects vital functions like heart rate, body temperature, and energy use."
    },
    {
      question: "What are common thyroid disorders?",
      answer: "Common thyroid disorders include hypothyroidism (underactive thyroid), hyperthyroidism (overactive thyroid), thyroid nodules, thyroiditis (inflammation of the thyroid), and thyroid cancer."
    },
    {
      question: "What are the symptoms of hypothyroidism?",
      answer: "Symptoms of hypothyroidism include fatigue, increased sensitivity to cold, constipation, dry skin, unexplained weight gain, puffy face, hoarseness, muscle weakness, elevated blood cholesterol, muscle aches and stiffness, pain and stiffness in joints, heavier than normal menstrual periods, depression, and slowed heart rate."
    },
    {
      question: "What are the symptoms of hyperthyroidism?",
      answer: "Symptoms of hyperthyroidism include weight loss despite increased appetite, rapid heartbeat, irregular heartbeat, palpitations, increased appetite, nervousness, anxiety, irritability, tremor, sweating, changes in menstrual patterns, increased sensitivity to heat, more frequent bowel movements, enlarged thyroid gland (goiter), fatigue, muscle weakness, difficulty sleeping, and thinning skin."
    },
    {
      question: "How accurate is the AI diagnosis on this website?",
      answer: "Our AI diagnosis system uses advanced deep learning models trained on thousands of thyroid scan images. While it can provide a preliminary assessment with good accuracy, it is not a replacement for professional medical diagnosis. Always consult with a healthcare provider for proper diagnosis and treatment."
    },
    {
      question: "What type of thyroid scan should I upload?",
      answer: "Our system works best with thyroid ultrasound images, scintigraphy scans, or clearly labeled thyroid function test results. Make sure the image is clear, well-lit, and shows the complete scan."
    },
    {
      question: "Is my medical data secure on this platform?",
      answer: "Yes, we take data security seriously. All uploaded images and personal information are encrypted and stored securely. We do not share your data with third parties without your consent, and images are only used for providing you with diagnostic results."
    },
    {
      question: "What should I do if the system detects a potential thyroid disorder?",
      answer: "If our system indicates a potential thyroid disorder, the most important step is to consult with a healthcare provider. Our platform will provide you with precautionary measures and dietary recommendations, but these should not replace professional medical advice."
    },
    {
      question: "Can thyroid disorders be cured?",
      answer: "Many thyroid disorders can be effectively managed with proper treatment. Hypothyroidism is typically treated with synthetic thyroid hormone replacement. Hyperthyroidism may be treated with anti-thyroid medications, radioactive iodine, or surgery. The treatment approach depends on the specific condition, its severity, and individual factors."
    },
    {
      question: "How often should I get my thyroid checked?",
      answer: "Adults should consider thyroid screening every 5 years starting at age 35. However, if you have symptoms or risk factors (family history, previous thyroid problems, autoimmune conditions), more frequent testing may be recommended. Always follow your healthcare provider's advice."
    }
  ];
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-600">
          Find answers to common questions about thyroid disorders and our diagnostic platform
        </p>
      </div>
      
      <div className="space-y-4 mb-16">
        {faqList.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeQuestion === index ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'}`}
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              <span className={`text-2xl font-light transition-transform duration-200 ${activeQuestion === index ? 'rotate-180 text-indigo-600' : 'text-gray-500'}`}>
                {activeQuestion === index ? '−' : '+'}
              </span>
            </button>
            {activeQuestion === index && (
              <div className="px-6 py-4 bg-white border-t border-gray-100">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-indigo-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-indigo-800 mb-4">Still Have Questions?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          If you couldn't find the answer you're looking for, please feel free to reach out to us.
        </p>
        <Link 
          to="/diagnosis" 
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
        >
          Try Our Diagnosis Tool
        </Link>
      </div>
    </div>
  );
};

export default FAQs;
