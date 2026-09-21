import CourseCard from '../components/CourseCard';

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'React Fundamentals & Modern Hooks',
      description: 'Master component architecture, props, state management, and custom React hooks.',
      instructor: 'Jane Doe',
      category: 'Frontend',
      level: 'Beginner',
      image: 'https://via.placeholder.com/400x220?text=React+Course',
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h2>User Dashboard</h2>
        <p>Welcome back! Monitor your learning progress and manage your enrolled courses.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h4>Enrolled Courses</h4>
          <span className="stat-number">1</span>
        </div>
        <div className="stat-card">
          <h4>Completed Courses</h4>
          <span className="stat-number">0</span>
        </div>
        <div className="stat-card">
          <h4>Hours Spent</h4>
          <span className="stat-number">12 hrs</span>
        </div>
      </div>

      <div className="enrolled-section">
        <h3>My Active Courses</h3>
        <div className="courses-grid">
          {enrolledCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              instructor={course.instructor}
              category={course.category}
              level={course.level}
              image={course.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;