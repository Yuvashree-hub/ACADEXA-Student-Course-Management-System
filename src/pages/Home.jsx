import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Master New Skills with Hands-On Courses</h1>
        <p>
          Upgrade your developer skills with our practical, industry-focused course modules. Start learning today!
        </p>
        <div className="hero-buttons">
          <Link to="/courses" className="btn-primary">Browse Courses</Link>
          <Link to="/register" className="btn-secondary">Get Started Free</Link>
        </div>
      </section>

      <h2>Why Choose EduPortal?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Expert Instructors</h3>
          <p>Learn directly from software engineers with real-world industry experience.</p>
        </div>
        <div className="feature-card">
          <h3>Self-Paced Learning</h3>
          <p>Access your course materials anytime, anywhere, and learn at your own pace.</p>
        </div>
        <div className="feature-card">
          <h3>Practical Projects</h3>
          <p>Build real frontend and backend projects to showcase in your portfolio.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;