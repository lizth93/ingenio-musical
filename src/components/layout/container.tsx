import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
}
function Container(props: Props) {
  return <div className={props.className}>{props.children}</div>;
}

export default styled(Container)`
  width: 90%;
  display: inline-block;
`;
