import React from "react";
import Image from 'next/image';

const Portfolio = () => {
  
 // Sample case study data - replace with your actual projects
 const caseStudies = [
  {
    id: 1,
    title: "Automated Lead Qualification for Marketing Agency",
    problem: "The owner was spending hours daily reviewing contact form submissions, missing hot leads while wasting time on uninterested prospects.",
    solution: "Built a custom n8n workflow that captures form submissions, analyzes them with ChatGPT, and instantly scores leads based on budget, timeline, and project fit.",
    tools: ["n8n", "OpenAI API", "Google Sheets"],
    results: ["15+ hours saved per week", "30% higher conversion rate on qualified leads", "Faster response times to hot leads"]
  },
  {
    id: 2,
    title: "E-commerce Integration for Specialty Retailer",
    problem: "Inventory data wasn't syncing between their website, Amazon store, and physical POS system, causing oversells and stock discrepancies.",
    solution: "Created a custom API integration that synchronizes inventory levels in real-time across all sales channels with automated low-stock alerts.",
    tools: ["Node.js", "REST APIs", "Webhooks"],
    results: ["Eliminated overselling incidents", "Reduced inventory management time by 70%", "Improved customer satisfaction with accurate stock information"]
  }
];

return (
  <section className="py-16 bg-gray-50" id="proof">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">See How I&apos;ve Helped Businesses Like Yours</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Don&apos;t just take my word for it. Explore these case studies to see the tangible results I&apos;ve delivered for clients.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map(study => (
          <div key={study.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{study.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-700 mb-2">The Problem</h4>
                <p className="text-gray-600">{study.problem}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-700 mb-2">The Solution</h4>
                <p className="text-gray-600">{study.solution}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-700 mb-2">Tools & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-2">The Results</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 px-8 py-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Interested in similar results?</span>
                <a 
                  href="#contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Ready to create your own success story?
        </p>
        <a 
          href="#contact" 
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors duration-300 inline-block"
        >
          Start Your Project Today
        </a>
      </div>
    </div>
  </section>
);
};

export default Portfolio;
