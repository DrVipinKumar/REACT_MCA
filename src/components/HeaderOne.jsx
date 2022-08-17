import SubHeaderOne from "./SubHeaderOne";

const HeaderOne = (props) => {
  return (
    <div>
      <h2>
        Welcome to {props.user} {props.dept} in Header One Component
      </h2>
      <SubHeaderOne clicked={props.clicked} />
    </div>
  );
};

export default HeaderOne;
