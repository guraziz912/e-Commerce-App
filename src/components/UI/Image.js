const Image = (props) => {
  return (
    <img alt={props.alt} src={props.src} className={props.className}></img>
  );
};
export default Image;
