import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}
function Container(props: Props) {
  return (
    <div className={props.className} id={props.id} style={props.style}>
      {props.children}
    </div>
  );
}

export default styled(Container)`
  display: inline-block;
`;
