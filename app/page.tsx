export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-3xl w-full text-center">
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          PESO-Flow
        </h1>

        <p className="text-gray-600 mb-8">
          Smart Job Matching System for Employment Opportunities
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Job Seeker
          </button>

          <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
            Employer
          </button>
        </div>

        <div className="my-8 border-t"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Fast Matching</h3>
            <p>Find jobs that match your skills instantly.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Secure Data</h3>
            <p>Your information is protected.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Easy Access</h3>
            <p>Access anywhere, anytime.</p>
          </div>
        </div>

      </div>
    </main>
  );
}