export default function Employers() {
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
                className="text-sm font-medium text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                Job Vacancies
              </a>
              <a
                href="/employers"
                className="text-sm font-medium text-[#1e3a8a] hover:text-[#1e3a8a] transition-colors"
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

      {/* HERO SECTION - Employer focused */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-yellow-300 text-sm">🏢</span>
              <span className="text-sm font-medium">For Employers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
              Find the <span className="text-yellow-300">Perfect Talent</span> for Your Business
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed">
              Access a pool of qualified candidates in Mabini. Post jobs, screen applicants,
              and hire the best talent to grow your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3.5 bg-yellow-400 text-[#1e3a8a] font-bold rounded-lg hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <span>Post a Job</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="px-7 py-3.5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
                Browse Candidates
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl font-bold text-yellow-300">1,000+</div>
                <div className="text-sm text-blue-100">Active Candidates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">200+</div>
                <div className="text-sm text-blue-100">Partner Companies</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">48hrs</div>
                <div className="text-sm text-blue-100">Average Fill Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES FOR EMPLOYERS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Employer Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Hiring Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end recruitment services to help you find and hire the right talent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 - Job Posting */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-[#1e3a8a]"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Job Posting</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Create detailed job postings that attract qualified candidates.
                  Reach thousands of job seekers in Mabini and surrounding areas.
                </p>
                <div className="text-[#1e3a8a] font-medium text-sm">Free job posting • Premium options available</div>
              </div>
            </div>

            {/* Service 2 - Candidate Screening */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-red-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Candidate Screening</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Pre-screened candidates with verified qualifications and work experience.
                  Access detailed profiles and application tracking.
                </p>
                <div className="text-red-500 font-medium text-sm">Verified candidates • Background checks</div>
              </div>
            </div>

            {/* Service 3 - Recruitment Support */}
            <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-2 bg-yellow-400"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Recruitment Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Get assistance with interview scheduling, candidate evaluation,
                  and offer management from our experienced recruitment team.
                </p>
                <div className="text-yellow-600 font-medium text-sm">Dedicated support • Interview coordination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PESO SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Recruitment Partner
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join hundreds of successful businesses that trust PESO Mabini for their hiring needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">Deep understanding of the Mabini job market and local talent pool.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Candidates</h3>
                  <p className="text-gray-600">Access to pre-vetted, qualified candidates ready to contribute to your business.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Cost Effective</h3>
                  <p className="text-gray-600">Competitive pricing with flexible packages to fit your recruitment budget.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Results</h3>
                  <p className="text-gray-600">Quick turnaround times with dedicated support to fill your positions faster.</p>
                </div>
              </div>
            </div>

            {/* Right side - Stats/Testimonials */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-[#1e3a8a] mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction Rate</div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic mb-2">
                    "PESO Mabini helped us find qualified candidates quickly and efficiently.
                    Their local knowledge is invaluable."
                  </p>
                  <div className="text-xs text-gray-500">- TechCorp Solutions</div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm italic mb-2">
                    "Excellent service and support throughout the recruitment process.
                    Highly recommended for businesses in Mabini."
                  </p>
                  <div className="text-xs text-gray-500">- Mabini General Hospital</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Pricing Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose the Right Plan for Your Business
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to meet the recruitment needs of businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="text-xl font-bold text-gray-900">Basic</h3>
                <div className="text-3xl font-bold text-[#1e3a8a] mt-2">₱500<span className="text-lg font-normal text-gray-600">/job</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Job posting on PESO platform
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Access to candidate database
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Basic applicant tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Priority placement
                  </li>
                </ul>
                <button className="w-full mt-6 px-4 py-2 bg-[#1e3a8a] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-[#1e3a8a] relative">
              <div className="absolute top-0 right-0 bg-[#1e3a8a] text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                Most Popular
              </div>
              <div className="bg-[#1e3a8a] px-6 py-4 text-white">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="text-3xl font-bold text-yellow-400 mt-2">₱1,500<span className="text-lg font-normal text-blue-200">/job</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Basic
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Priority job placement
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Featured company profile
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Dedicated account manager
                  </li>
                </ul>
                <button className="w-full mt-6 px-4 py-2 bg-[#1e3a8a] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 px-6 py-4">
                <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
                <div className="text-3xl font-bold text-[#1e3a8a] mt-2">Custom<span className="text-lg font-normal text-gray-600"> pricing</span></div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Everything in Premium
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Bulk job posting discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Advanced analytics & reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom recruitment solutions
                  </li>
                </ul>
                <button className="w-full mt-6 px-4 py-2 bg-[#1e3a8a] text-white font-medium rounded-lg hover:bg-blue-900 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMPLOYER DASHBOARD PREVIEW SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#1e3a8a] font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-1.5 rounded-full inline-block mb-4">
              Employer Tools
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Tools for Efficient Hiring
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access comprehensive tools to manage your recruitment process from posting to hiring
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Dashboard Features */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics Dashboard</h3>
                  <p className="text-gray-600">Track application metrics, view candidate demographics, and monitor hiring progress with detailed analytics.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Application Management</h3>
                  <p className="text-gray-600">Review applications, schedule interviews, send offers, and track the entire hiring pipeline in one place.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Candidate Search</h3>
                  <p className="text-gray-600">Search our database of qualified candidates using advanced filters for skills, experience, and location.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Get help from our dedicated support team whenever you need assistance with your recruitment process.</p>
                </div>
              </div>
            </div>

            {/* Right side - Dashboard Mockup */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Mock Dashboard Header */}
                <div className="bg-[#1e3a8a] text-white px-6 py-4">
                  <h4 className="font-semibold">Employer Dashboard</h4>
                </div>

                {/* Mock Stats */}
                <div className="p-6 border-b border-gray-200">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#1e3a8a]">12</div>
                      <div className="text-xs text-gray-600">Active Jobs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">48</div>
                      <div className="text-xs text-gray-600">Applications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-500">3</div>
                      <div className="text-xs text-gray-600">Interviews</div>
                    </div>
                  </div>
                </div>

                {/* Mock Recent Activity */}
                <div className="p-6">
                  <h5 className="font-semibold text-gray-900 mb-4">Recent Activity</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">New application for Software Developer position</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Interview scheduled with Maria Santos</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-600">Job posting for Nurse position expires in 3 days</span>
                    </div>
                  </div>
                </div>

                {/* Mock Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-2 bg-[#1e3a8a] text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors">
                      Post New Job
                    </button>
                    <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      View Candidates
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-[#1e3a8a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Hire Top Talent?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the growing number of successful businesses that trust PESO Mabini for their recruitment needs
          </p>
          <button className="px-8 py-3.5 bg-yellow-400 text-[#1e3a8a] font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-lg inline-flex items-center gap-2">
            <span>Post Your First Job</span>
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