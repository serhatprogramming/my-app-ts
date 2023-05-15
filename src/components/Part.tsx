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
                  <strong>
                    {course.name} {course.exerciseCount}
                  </strong>{" "}
                  <br />
                  {course.description}
                </p>
              </div>
            );
          case "group":
            return (
              <div key={course.name}>
                <p>
                  <strong>
                    {course.name} {course.exerciseCount}
                  </strong>{" "}
                  <br />
                  project exercises: {course.groupProjectCount}
                </p>
              </div>
            );
          case "background":
            return (
              <div key={course.name}>
                <p>
                  <strong>
                    {course.name} {course.exerciseCount}
                  </strong>
                  <br />
                  {course.description} <br />
                  {course.backgroundMaterial}{" "}
                </p>
              </div>
            );
          case "special":
            return (
              <div key={course.name}>
                <p>
                  <strong>
                    {course.name} {course.exerciseCount}
                  </strong>
                  <br />
                  {course.description}
                  <br />
                  required skilss: <>{course.requirements.join(", ")}</>
                </p>
              </div>
            );
          default:
            return <>Not listed</>;
        }
      })}
    </>
  );
};

export default Part;
