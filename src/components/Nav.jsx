import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBlogDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsBlogDropdownOpen(false);
    setIsMobileMenuOpen(false);
  }, [router.pathname]);

  // Detect if we're on a Hebrew page
  const isHebrew = !(router.pathname.includes('-en') || router.pathname === '/index-en');
  
  const navItems = isHebrew ? [
    { href: '#home', label: 'בית', isHash: true },
    { href: '#services', label: 'אודות', isHash: true },
    { href: '#proof', label: 'תיק עבודות', isHash: true },
    { href: '#testimonials', label: 'המלצות', isHash: true },
    { href: '#contact', label: 'צור קשר', isHash: true }
  ] : [
    { href: '#home', label: 'Home', isHash: true },
    { href: '#services', label: 'About', isHash: true },
    { href: '#proof', label: 'Portfolio', isHash: true },
    { href: '#testimonials', label: 'Testimonials', isHash: true },
    { href: '#contact', label: 'Contact', isHash: true }
  ];

  const blogSubmenu = isHebrew ? [
    { href: '/blog/robots-future', label: 'עתיד הרובוטים' },
    { href: '/blog/ai-white-paper', label: 'מסמך עמדה על AI' }
  ] : [
    { href: '/blog/robots-future', label: 'Robots Future' },
    { href: '/blog/ai-white-paper', label: 'AI White Paper' }
  ];

  const getStartedText = isHebrew ? 'התחל עכשיו' : 'Get Started';
  const blogLabel = isHebrew ? 'בלוג' : 'Blog';

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Always show background on non-home pages
  const showBackground = isScrolled || (router.pathname !== '/' && router.pathname !== '/index-en');
  // Check if we're on a blog page
  const isBlogPage = router.pathname?.includes('/blog/');

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        showBackground
          ? isBlogPage
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-gray-800 backdrop-blur-md shadow-lg border-b border-blue-700/50' 
            : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
      dir={isHebrew ? 'rtl' : 'ltr'}
      style={{ zIndex: 100 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {(router.pathname === '/' || router.pathname === '/index-en') ? (
              <a 
                href="#home" 
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#home');
                }}
              >
                AS
              </a>
            ) : (
              <Link 
                href={isHebrew ? "/" : "/index-en"}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              >
                AS
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className={`${isHebrew ? 'mr-10 flex-row-reverse space-x-reverse' : 'ml-10'} flex items-baseline space-x-8`}>
              {navItems.map((item) => (
                item.isHash ? (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      if (router.pathname === '/' || router.pathname === '/index-en') {
                        scrollToSection(item.href);
                      } else {
                        router.push(isHebrew ? `/${item.href}` : `/index-en${item.href}`);
                      }
                    }}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      showBackground
                        ? isBlogPage
                          ? 'text-white hover:text-blue-300' 
                          : 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      showBackground
                        ? isBlogPage
                          ? 'text-white hover:text-blue-300' 
                          : 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              
              {/* Blog Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center ${
                      showBackground
                        ? isBlogPage
                          ? 'text-white hover:text-blue-300' 
                          : 'text-gray-700 hover:text-blue-600'
                        : 'text-white hover:text-blue-300'
                    }`}
                >
                  {blogLabel}
                  <svg 
                    className={`${isHebrew ? 'mr-1' : 'ml-1'} h-4 w-4 transition-transform duration-300 ${isBlogDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isBlogDropdownOpen && (
                  <div className={`absolute top-full ${isHebrew ? 'right-0' : 'left-0'} mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50`}>
                    {blogSubmenu.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsBlogDropdownOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                if (router.pathname === '/' || router.pathname === '/index-en') {
                  scrollToSection('#contact');
                } else {
                  router.push(isHebrew ? '/#contact' : '/index-en#contact');
                }
              }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {getStartedText}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                showBackground
                  ? isBlogPage
                    ? 'text-white hover:text-blue-300' 
                    : 'text-gray-700 hover:text-blue-600'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.isHash ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (router.pathname === '/') {
                      scrollToSection(item.href);
                    } else {
                      router.push(`/${item.href}`);
                    }
                    setIsMobileMenuOpen(false);
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            
            {/* Mobile Blog Dropdown */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <button
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
              >
                {blogLabel}
                <svg 
                  className={`h-4 w-4 transition-transform duration-300 ${isBlogDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isBlogDropdownOpen && (
                <div className={`${isHebrew ? 'pr-4' : 'pl-4'} mt-1 space-y-1`}>
                  {blogSubmenu.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
                      onClick={() => {
                        setIsBlogDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <div className="pt-4 pb-3 border-t border-gray-200">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (router.pathname === '/') {
                    scrollToSection('#contact');
                  } else {
                    router.push('/#contact');
                  }
                  setIsMobileMenuOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
              >
                {getStartedText}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;