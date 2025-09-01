import React from "react";
import Image from 'next/image';

const Portfolio = ({ data }) => {
  
  if (data) {
    var projects = data.projects.map(function (project) {
      var projectImage = "/static/images/portfolio/" + project.image;
      return (
        <div key={project.title} className="group">
          <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <a href={project.url} title={project.title} className="block">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  alt={project.title} 
                  src={projectImage} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h5 className="text-xl font-bold mb-2">{project.title}</h5>
                    {project.category && (
                      <p className="text-sm text-gray-300">{project.category}</p>
                    )}
                  </div>
                </div>
                
                {/* Link Icon */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <i className="fa fa-link text-gray-700"></i>
                </div>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
        
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore a selection of my latest projects showcasing web development, AI integration, and digital solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss how I can help bring your vision to life with cutting-edge technology and innovative solutions.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
