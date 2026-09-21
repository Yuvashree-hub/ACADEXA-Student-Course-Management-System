import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courseList = [
    {
      id: 1,
      title: 'React Fundamentals & Modern Hooks',
      description: 'Master component architecture, props, state management, and custom React hooks.',
      instructor: 'Jane Doe',
      category: 'Frontend',
      level: 'Beginner',
      image: 'https://via.placeholder.com/400x220?text=React+Course',
    },
    {
      id: 2,
      title: 'Modern ES6+ JavaScript Mastery',
      description: 'Deep dive into asynchronous JavaScript, promises, array methods, and modern features.',
      instructor: 'John Smith',
      category: 'JavaScript',
      level: 'Intermediate',
      image: 'https://via.placeholder.com/400x220?text=JS+Course',
    },
    {
      id: 3,
      title: 'CSS Grid & Flexbox Masterclass',
      description: 'Learn to build responsive, modern, and complex web layouts using pure CSS.',
      instructor: 'Alex Johnson',
      category: 'CSS / Styling',
      level: 'Beginner',
      image: 'https://via.placeholder.com/400x220?text=CSS+Course',
    },
    {
      id: 4,
      title: 'Full-Stack Node.js & Express API',
      description: 'Build robust REST APIs, handle user authentication, and connect to databases.',
      instructor: 'Sarah Lee',
      category: 'Backend',
      level: 'Advanced',
      image: 'https://via.placeholder.com/400x220?text=Node+Course',
    },
  ];

  return (
    <div className="courses-page">
      <div className="page-header">
        <h2>Explore Courses</h2>
        <p>Discover top-rated web development and programming courses.</p>
      </div>

      <div className="courses-grid">
        {courseList.map((course) => (
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
  );
};

export default Courses;