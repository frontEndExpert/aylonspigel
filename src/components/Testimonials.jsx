import React from "react";

const Testimonials = ({ data }) => {
  if (data) {
    var testimonials = data.testimonials.map(function (testimonials, index) {
      return (
        <div key={testimonials.user} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start space-x-4">
            {/* Quote Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <blockquote className="text-black leading-relaxed mb-4" style={{color: 'black !important'}}>
                <p className="text-xs italic text-left" style={{fontSize: '12px !important', color: 'black !important'}}>&quot;{testimonials.text}&quot;</p>
              </blockquote>
              <cite className="text-brand-primary-dark font-semibold flex items-center text-sm">
                <div className="w-7 h-7 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center text-white text-xs font-bold mr-3">
                  {testimonials.user.charAt(0).toUpperCase()}
                </div>
                {testimonials.user}
              </cite>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <section id="testimonials" className="py-8 sm:py-12 lg:py-16 bg-white w-full" style={{background: 'white !important'}}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary-dark mb-4 sm:mb-6 leading-tight" style={{color: '#115E47 !important'}}>
              What Clients Say
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Real feedback from business owners who&apos;ve transformed their operations with AI automation
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-secondary to-brand-accent mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials}
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-primary-dark mb-6 sm:mb-8 text-center" style={{color: '#115E47 !important'}}>
                Why Business Owners Choose Me
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-brand-primary-dark mb-2">Proven Results</h4>
                  <p className="text-sm text-gray-600">Delivering measurable outcomes that drive business growth</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-brand-primary-dark mb-2">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">Quick turnaround times without compromising quality</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-secondary to-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-base font-semibold text-brand-primary-dark mb-2">Personal Touch</h4>
                  <p className="text-sm text-gray-600">Dedicated attention and customized solutions for each client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
