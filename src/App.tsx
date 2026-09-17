import "./index.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <div className="logo">
          PESO-Hub
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <button>Login</button>
        </div>

      </nav>


      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="small-title">
            PUBLIC EMPLOYMENT SYSTEM
          </p>

          <h1>
            Connecting People
            <br />
            With Opportunities
          </h1>

          <p>
            Find job opportunities, connect with employers,
            and build your career through our public
            employment platform.
          </p>

          <div className="hero-buttons">

            <button>
              Find Jobs
            </button>

            <button className="secondary-button">
              Post a Job
            </button>

          </div>

        </div>

      </section>


      {/* Services */}
      <section id="services" className="services">

        <h2>
          Our Services
        </h2>

        <p>
          A simple platform for job seekers, employers,
          and employment administrators.
        </p>

        <div className="service-container">

          <div className="service-card">
            <h3>Find Jobs</h3>
            <p>
              Search and discover available
              employment opportunities.
            </p>
          </div>

          <div className="service-card">
            <h3>Post Jobs</h3>
            <p>
              Employers can create and manage
              job vacancies.
            </p>
          </div>

          <div className="service-card">
            <h3>Apply for Jobs</h3>
            <p>
              Submit applications and track
              your application status.
            </p>
          </div>

        </div>

      </section>


      {/* Featured Jobs */}
      <section id="jobs" className="jobs">

        <h2>
          Featured Job Vacancies
        </h2>

        <div className="job-container">

          <div className="job-card">
            <h3>Web Developer</h3>
            <p>ABC Technologies</p>
            <p>Batangas City</p>

            <button>
              View Job
            </button>
          </div>

          <div className="job-card">
            <h3>IT Support Specialist</h3>
            <p>XYZ Corporation</p>
            <p>Lipa City</p>

            <button>
              View Job
            </button>
          </div>

          <div className="job-card">
            <h3>Administrative Assistant</h3>
            <p>Mabini Business Center</p>
            <p>Mabini, Batangas</p>

            <button>
              View Job
            </button>
          </div>

        </div>

      </section>


      {/* About */}
      <section id="about" className="about">

        <h2>
          About the Public Employment System
        </h2>

        <p>
          The Public Employment System provides a centralized
          platform where job seekers can find employment
          opportunities and employers can find qualified
          applicants.
        </p>

      </section>


      {/* Footer */}
      <footer>

        <h3>PESO-Hub</h3>

        <p>
          Public Employment System
        </p>

        <p>
          © 2026 Public Employment System
        </p>

      </footer>

    </div>
  );
}

export default App;