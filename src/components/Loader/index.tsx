import "./index.scss";

interface ILoader {
  size?: number;
  containerMargin?: number;
}

export const Loader = ({ size, containerMargin }: ILoader) => {
  return (
    <div className="loader-wrapper" style={{ width: `${size || 100}px`, height: `${size || 100}px`, margin: `${containerMargin || 50}px auto` }}>
      <div className="loader"></div>
    </div>
  );
};
