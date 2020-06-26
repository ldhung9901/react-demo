import styled from "styled-components";

const StyledHero = styled.header`
  min-height: 60vh;
  background-image:url(${(props)=>{
     return props.img
  }});
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default StyledHero;
