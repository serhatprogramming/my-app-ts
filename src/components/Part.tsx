import { Courses } from "./Content";

const Part = (props: Courses) => {
  return (
    <>
      {props.courses.map((course) => {
        switch (course.kind) {
          case "basic":
            return (
              <div key={course.name}>
                <p>
                  <strong>Course Name: </strong> {course.name}
                </p>
                <p>Course description: {course.description}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            );
          case "group":
            return (
              <div key={course.name}>
                <p>
                  <strong>Course Name: </strong> {course.name}
                </p>
                <p>Projects: {course.groupProjectCount}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            );
          case "background":
            return (
              <div key={course.name}>
                <p>
                  <strong>Course Name: </strong> {course.name}
                </p>
                <p>Course description: {course.description}</p>
                <p>Background Material: {course.backgroundMaterial}</p>
                <p>Exercises: {course.exerciseCount}</p>
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default Part;
