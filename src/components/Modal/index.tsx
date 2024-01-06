import "./index.scss";

export const Modal: React.FC<any> = (props) => {
  return <div className="generic-modal">{props.children}</div>;
};
