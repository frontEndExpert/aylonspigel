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
      results: ["15+ hours saved per week", "30% higher conversion rate on qualified leads", "Faster response times to hot leads"],
      icon: (
        <svg className="w-8 h-8 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: 2,
      title: "E-commerce Integration for Specialty Retailer",
      problem: "Inventory data wasn't syncing between their website, Amazon store, and physical POS system, causing oversells and stock discrepancies.",
      solution: "Created a custom API integration that synchronizes inventory levels in real-time across all sales channels with automated low-stock alerts.",
      tools: ["Node.js", "REST APIs", "Webhooks"],
      results: ["Eliminated overselling incidents", "Reduced inventory management time by 70%", "Improved customer satisfaction with accurate stock information"],
      icon: (
        <svg className="w-8 h-8 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-brand-neutral w-full" id="proof">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary-dark mb-4 sm:mb-6 leading-tight">
            Real Results, Not Just Promises
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Here&apos;s how I&apos;ve helped businesses like yours save time and increase revenue.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-none">
          {caseStudies.map(study => (
            <div 
              key={study.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              {/* Header with Icon */}
              <div className="bg-gradient-to-r from-brand-primary to-brand-primary/90 px-6 sm:px-8 py-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {study.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Problem Section */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-brand-primary-dark flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    The Problem
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.problem}</p>
                </div>
                
                {/* Solution Section */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-brand-primary-dark flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    The Solution
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{study.solution}</p>
                </div>
                
                {/* Tools Section */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-brand-primary-dark flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tools.map((tool, index) => (
                      <span 
                        key={index} 
                        className="bg-brand-secondary/20 text-brand-primary text-sm font-medium px-3 py-2 rounded-full border border-brand-secondary/30 hover:bg-brand-secondary/30 transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Results Section */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-brand-primary-dark flex items-center gap-2">
                    <svg className="w-5 h-5 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    The Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <svg className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="leading-relaxed">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* CTA Footer */}
              <div className="bg-gray-50 px-6 sm:px-8 py-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <span className="text-gray-600 text-center sm:text-left">
                    Interested in similar results?
                  </span>
                  <a 
                    href="#contact" 
                    className="bg-brand-accent hover:bg-brand-accent/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Video Placeholder */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100 w-full">
            <div className="w-full max-w-6xl mx-auto">
                                <h3 className="text-2xl sm:text-3xl font-bold text-brand-primary-dark mb-4">
                                Automation Process In Action
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Watch how this automation captures lead information from your forms, seamlessly adds it to a database or Google Sheet, and then sends it to Perplexity AI for instant analysis and evaluation. The system enriches each lead with an AI-powered score, updating your database in real time. Your sales team can then prioritize the hottest, most urgent leads first—boosting efficiency, conversions, and overall performance.
              </p>
              
              {/* Placeholder for Loom video - replace with actual embed code */}
              <div className="bg-gray-100 rounded-xl p-8 border-2 border-dashed border-gray-300">
                <p className="text-sm text-gray-500">
                  <iframe src="https://www.loom.com/embed/aeea9b00b837461097f1926d3c5e598a?sid=3370867a-5f35-4cd0-9c89-1279555a3e88" width="100%" height="400"></iframe>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <p className="text-xl text-gray-700 mb-6 sm:mb-8">
            Ready to create your own success story?
          </p>
          <a 
            href="#contact" 
            className="bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 px-8 rounded-xl text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
          >
            <span>Start Your Project Today</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
