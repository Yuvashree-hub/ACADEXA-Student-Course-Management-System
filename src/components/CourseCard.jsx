const CourseCard = ({ title, description, instructor, image, category = 'Web Dev', level = 'Beginner' }) => {
  return (
    <div className="course-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="course-image" />
        <span className="badge-category">{category}</span>
      </div>

      <div className="card-body">
        <div className="card-meta">
          <span className="level">{level}</span>
          <span className="instructor">By {instructor}</span>
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        <div className="card-footer">
          <button className="btn-enroll" onClick={() => alert(`Enrolled in ${title}!`)}>
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;