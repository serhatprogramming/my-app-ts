import { CoursePart } from "../App";

export interface Courses {
  courses: CoursePart[];
}

const Content = (props: Courses) => {
  return (
    <>
      {props.courses.map((course) => (
        <p key={course.name}>
          {course.name} {course.exerciseCount}
        </p>
      ))}
    </>
  );
};

export default Content;
