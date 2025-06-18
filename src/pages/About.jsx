import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-indigo-800 mb-4">About Thyroid Disorders</h1>
        <p className="text-xl text-gray-600">Understanding the importance of thyroid health and early diagnosis</p>
      </section>
      
      <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-4">What is the Thyroid Gland?</h2>
          <p className="text-gray-700 mb-4">The thyroid is a small butterfly-shaped gland located at the base of your neck. Despite its small size, it plays a crucial role in your body's functioning by producing hormones that regulate metabolism, growth, and energy use.</p>
          <p className="text-gray-700 mb-2">Thyroid hormones control vital functions such as:</p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Heart rate and blood pressure</li>
            <li>Body weight and temperature</li>
            <li>Energy expenditure</li>
            <li>Growth and development</li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <img className="rounded-lg shadow-lg" src="/images/t1.jpg" alt="Thyroid anatomy" />
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">Common Thyroid Disorders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Hypothyroidism</h3>
              <p className="text-gray-700 mb-4">An underactive thyroid that doesn't produce enough thyroid hormones. This can cause fatigue, weight gain, and sensitivity to cold.</p>
            </div>
            <img className="w-full h-60 object-cover" src="/images/t2.jpg" alt="Hypothyroidism" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Hyperthyroidism</h3>
              <p className="text-gray-700 mb-4">An overactive thyroid that produces too much thyroid hormone. Symptoms include weight loss, rapid heartbeat, and nervousness.</p>
            </div>
            <img className="w-full h-60 object-cover" src="/images/t3.jpg" alt="Hyperthyroidism" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Thyroid Nodules</h3>
              <p className="text-gray-700 mb-4">Abnormal growths of thyroid cells that form lumps within the thyroid gland. Most are benign, but some can be cancerous.</p>
            </div>
            <img className="w-full h-60 object-center object-contain bg-white" src="/images/t4.jpg" alt="Thyroid nodules" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Thyroiditis</h3>
              <p className="text-gray-700 mb-4">Inflammation of the thyroid gland, which can cause either quick release or slow leak of thyroid hormones.</p>
            </div>
            <img className="w-full h-60 object-center object-contain bg-white" src="/images/t5.jpg" alt="Thyroiditis" />
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">Causes of Thyroid Disorders</h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/3">
            <img className="rounded-lg shadow-lg w-full" src="/images/t6.jpg" alt="Causes of thyroid disorders" />
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Autoimmune Disorders</h3>
              <p className="text-gray-700">Conditions like Hashimoto's thyroiditis and Graves' disease, where the immune system attacks the thyroid.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Iodine Deficiency</h3>
              <p className="text-gray-700">The thyroid needs iodine to produce hormones. Too little or too much iodine can cause problems.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Genetic Factors</h3>
              <p className="text-gray-700">Family history of thyroid disorders increases your risk.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Radiation Exposure</h3>
              <p className="text-gray-700">Previous radiation treatment to the head, neck, or chest can affect thyroid function.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Certain Medications</h3>
              <p className="text-gray-700">Some medications can interfere with thyroid hormone production.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-indigo-700 mb-8 text-center">Our Diagnostic Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Deep Learning</h3>
              <p className="text-gray-700 mb-4">Our diagnostic platform uses deep learning algorithms to analyze thyroid scans. Deep learning is a subset of machine learning that uses neural networks with many layers to analyze various factors of input data.</p>
            </div>
            <img className="w-full h-60 object-cover" src="/images/t7.jpg" alt="Deep learning" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Convolutional Neural Networks (CNN)</h3>
              <p className="text-gray-700 mb-4">CNNs are specialized neural networks designed for processing pixel data from images. Our system uses CNNs to identify patterns in thyroid scan images that may indicate disorders.</p>
            </div>
            <img className="w-full h-65 object-cover" src="/images/t8.jpg" alt="Convolutional Neural Network" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Recurrent Neural Networks (RNN)</h3>
              <p className="text-gray-700 mb-4">RNNs are used to analyze sequential data and help our system understand progression patterns in thyroid conditions over time.</p>
            </div>
            <img className="w-full h-75 object-cover" src="/images/t9.jpg" alt="Recurrent Neural Network" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Dynamic Classifier Selection</h3>
              <p className="text-gray-700 mb-4">This technique allows our system to select the most appropriate classification method for each specific case, improving accuracy.</p>
            </div>
            <img className="w-full h-90 object-cover" src="/images/t10.jpg" alt="Dynamic Classifier Selection" />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">Dynamic Selection Hybrid Model</h3>
              <p className="text-gray-700 mb-4">Our hybrid model combines multiple approaches to achieve higher diagnostic accuracy, adapting to different types of thyroid imaging and patient data.</p>
            </div>
            <img className="w-full h-90 object-cover" src="/images/t11.jpg" alt="Hybrid Model" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;