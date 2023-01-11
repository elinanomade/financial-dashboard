import "../styles/ModuleWrapper.css";

const ModuleWrapper = ({ title, titleChildren, showBackground, children }) => {
  const className = `module-wrapper ${showBackground && "card-look"}`;

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={className} onClick={handleClick}>
      <div className="module-wrapper-header">
        <h2 className="module-wrapper-header-title">{title}</h2>
        {titleChildren}
        {/* <button>Add Goal</button> */}
      </div>
      {children}
    </div>
  );
};

ModuleWrapper.defaultProps = {
  showBackground: true,
};

export default ModuleWrapper;
