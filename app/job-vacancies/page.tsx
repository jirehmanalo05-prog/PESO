export default function JobVacancies() {
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
                className="text-sm font-medium text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                About Us
              </a>
              <a
                href="/job-vacancies"
                className="text-sm font-medium text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"
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

      {/* HERO SECTION - Job focused */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-300 text-sm">💼</span>
              <span className="text-sm font-medium">Find Your Dream Job</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
              Discover <span className="text-yellow-300">Opportunities</span> in Mabini
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
              Browse through hundreds of job openings from top companies in Mabini.
              Find the perfect position that matches your skills and career goals.
            </p>

            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Developer"
                    className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Mabini, Batangas"
                    className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-100 mb-2">Category</label>
                  <select className="w-full px-3 py-2 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400">
                    <option>All Categories</option>
                    <option>Technology</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                    <option>Retail</option>
                  </select>
                </div>
              </div>
              <button className="w-full mt-4 px-6 py-3 bg-yellow-400 text-[#1e3a8a] font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-lg">
                Search Jobs
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-blue-100">Active Jobs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-sm text-blue-100">Companies Hiring</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-blue-100">Job Updates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED JOBS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Featured Opportunities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Job Openings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the most recent job opportunities posted by our partner companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Card 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-[#1e3a8a]"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-[#1e3a8a] font-bold text-sm">TC</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">New</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Software Developer</h3>
                <p className="text-[#1e3a8a] font-medium mb-3">TechCorp Solutions</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>📍 Mabini, Batangas</span>
                  <span>💰 ₱25,000 - ₱35,000</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Join our dynamic team to develop innovative software solutions. Experience with React, Node.js preferred.
                </p>
                <button className="w-full px-4 py-2 bg-[#1e3a8a] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-red-500"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 font-bold text-sm">HC</span>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Urgent</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Registered Nurse</h3>
                <p className="text-red-500 font-medium mb-3">Mabini General Hospital</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>📍 Mabini, Batangas</span>
                  <span>💰 ₱18,000 - ₱25,000</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Provide compassionate care to patients. Must be licensed RN with at least 2 years experience.
                </p>
                <button className="w-full px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-yellow-400"></div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-sm">ES</span>
                  </div>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Full-time</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Elementary Teacher</h3>
                <p className="text-yellow-600 font-medium mb-3">Mabini Central School</p>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>📍 Mabini, Batangas</span>
                  <span>💰 ₱15,000 - ₱20,000</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  Inspire young minds in our community school. Bachelor's degree in Education required.
                </p>
                <button className="w-full px-4 py-2 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 bg-[#1e3a8a] text-white font-bold rounded-lg hover:bg-blue-900 transition-colors">
              View All Jobs
            </button>
          </div>
        </div>
      </section>

      {/* JOB CATEGORIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Browse by Category
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Jobs by Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across different sectors and find the career path that's right for you
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technology</h3>
              <p className="text-gray-600 text-sm mb-3">85 jobs available</p>
              <div className="text-[#1e3a8a] font-medium text-sm">View Jobs →</div>
            </div>

            {/* Category 2 */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-red-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm mb-3">42 jobs available</p>
              <div className="text-red-500 font-medium text-sm">View Jobs →</div>
            </div>

            {/* Category 3 */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-yellow-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600 text-sm mb-3">28 jobs available</p>
              <div className="text-yellow-600 font-medium text-sm">View Jobs →</div>
            </div>

            {/* Category 4 */}
            <div className="group bg-gray-50 rounded-xl p-6 hover:bg-green-50 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Retail</h3>
              <p className="text-gray-600 text-sm mb-3">67 jobs available</p>
              <div className="text-green-600 font-medium text-sm">View Jobs →</div>
            </div>
          </div>
        </div>
      </section>

      {/* JOB TOOLS & RESOURCES SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Job Seeker Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources to Help You Succeed
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access powerful tools and resources designed to enhance your job search experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Job Alerts */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-[#1e3a8a]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.868 12.683A17.925 17.925 0 0112 21c7.962 0 12-1.21 12-2.683m-12 2.683a17.925 17.925 0 01-7.132-8.317M12 21V9m0 0l8.539-3.539M12 9L3.461 5.461" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Alerts</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Get notified instantly when new jobs matching your criteria are posted. Never miss an opportunity.
                </p>
                <button className="w-full px-4 py-3 bg-[#1e3a8a] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors">
                  Set Up Alerts
                </button>
              </div>
            </div>

            {/* Resume Builder */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-yellow-400"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resume Builder</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Create professional resumes with our easy-to-use builder. Choose from multiple templates and formats.
                </p>
                <button className="w-full px-4 py-3 bg-yellow-400 text-gray-900 font-medium rounded-lg hover:bg-yellow-500 transition-colors">
                  Build Resume
                </button>
              </div>
            </div>

            {/* Career Counseling */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-green-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Career Counseling</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Get personalized career advice from our experienced counselors. Schedule a free consultation today.
                </p>
                <button className="w-full px-4 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Apply?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Create your profile today and start applying to jobs that match your skills and interests
          </p>
          <button className="px-8 py-3.5 bg-yellow-400 text-[#1e3a8a] font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-lg inline-flex items-center gap-2">
            <span>Create Profile</span>
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