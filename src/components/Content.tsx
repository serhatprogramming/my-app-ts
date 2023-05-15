export interface Course {
  name: string;
  exerciseCount: number;
}

export interface Courses {
  courses: Course[];
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
