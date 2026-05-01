export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      {/* NAVBAR - Clean and professional */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#1e3a8a] rounded-md flex items-center justify-center shadow-sm">
                <span className="text-white text-xs font-bold">PM</span>
              </div>
              <span className="font-bold text-[#1e3a8a] text-xl tracking-tight">PESO<span className="font-normal"> Mabini</span></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-sm font-medium text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"
              >
                About Us
              </a>
              <a
                href="/job-vacancies"
                className="text-sm font-medium text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                Job Vacancies
              </a>
              <a
                href="/employers"
                className="text-sm font-medium text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                Employers
              </a>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-5 py-2 text-sm font-semibold text-[#1e3a8a] border border-[#1e3a8a] rounded-md hover:bg-blue-50 transition-colors">
                Login
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-[#1e3a8a] rounded-md hover:bg-blue-900 transition-colors shadow-sm">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - About focused */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-300 text-sm">👥</span>
              <span className="text-sm font-medium">About PESO Mabini</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
              Empowering <span className="text-yellow-300">Communities</span> Through Employment
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
              PESO Mabini is dedicated to bridging the gap between job seekers and employers,
              fostering economic growth and career development in our community.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3.5 bg-yellow-400 text-[#1e3a8a] font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <span>Our Mission</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="px-7 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-yellow-300">5+</div>
                <div className="text-sm text-blue-100">Years of Service</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">10,000+</div>
                <div className="text-sm text-blue-100">Jobs Filled</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Driving employment excellence and community development through dedicated service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-[#1e3a8a]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  To provide comprehensive employment services that empower individuals and businesses
                  in Mabini, fostering sustainable economic growth and career development opportunities
                  for all community members.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-yellow-400"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  To be the leading employment service provider in Mabini, recognized for excellence
                  in connecting talent with opportunity and driving community prosperity through
                  innovative workforce solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Showcasing Our Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch how PESO Mabini has transformed lives and businesses throughout the years
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Main Video */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg className="w-16 h-16 mx-auto mb-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-lg font-medium">PESO Mabini - 5 Years of Service</p>
                  <p className="text-sm text-gray-300 mt-2">Click to watch our journey</p>
                </div>
              </div>
            </div>

            {/* Video Thumbnails */}
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Community Outreach Program</h4>
                    <p className="text-sm text-gray-600">How we help local communities</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Success Stories</h4>
                    <p className="text-sm text-gray-600">Real stories from job seekers</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-12 bg-gray-300 rounded flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Partnership Highlights</h4>
                    <p className="text-sm text-gray-600">Working with local businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Meet Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dedicated Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team is committed to providing exceptional service to job seekers and employers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">JD</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Juan Dela Cruz</h3>
              <p className="text-[#1e3a8a] font-medium mb-3">Director</p>
              <p className="text-gray-600 text-sm">
                Leading PESO Mabini with over 10 years of experience in workforce development and community service.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">MS</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maria Santos</h3>
              <p className="text-red-500 font-medium mb-3">Career Counselor</p>
              <p className="text-gray-600 text-sm">
                Specialized in career guidance and skills assessment, helping individuals find their ideal career paths.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PR</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pedro Reyes</h3>
              <p className="text-yellow-600 font-medium mb-3">Employer Liaison</p>
              <p className="text-gray-600 text-sm">
                Building strong partnerships with local businesses to create more employment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Be part of the PESO Mabini family and discover how we can help you achieve your career goals
          </p>
          <button className="px-8 py-3.5 bg-yellow-400 text-[#1e3a8a] font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-lg inline-flex items-center gap-2">
            <span>Get Started Today</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-[#1e3a8a] rounded-md flex items-center justify-center">
                  <span className="text-white text-xs font-bold">PM</span>
                </div>
                <span className="font-bold text-white text-lg">PESO Mabini</span>
              </div>
              <p className="text-sm">
                Connecting job seekers with opportunities in Mabini and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition">Home</a></li>
                <li><a href="/about" className="hover:text-white transition">About Us</a></li>
                <li><a href="/job-vacancies" className="hover:text-white transition">Job Vacancies</a></li>
                <li><a href="/employers" className="hover:text-white transition">Employers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e3a8a] transition">
                  <span>📘</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e3a8a] transition">
                  <span>🐦</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#1e3a8a] transition">
                  <span>📷</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 PESO Mabini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}