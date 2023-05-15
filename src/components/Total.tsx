import { Courses } from "./Content";

const Total = (props: Courses) => {
  return (
    <p>
      Number of exercises{" "}
      {props.courses.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  );
};

export default Total;
