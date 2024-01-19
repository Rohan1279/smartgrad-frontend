import PropTypes from "prop-types";

const Typewriter = ({ children }) => {
  return (
    <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black pr-5 text-inherit text-black font-bold">
      {children}
    </h1>
  );
};

Typewriter.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Typewriter;
