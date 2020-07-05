import styled from "styled-components";

const StyledHero = styled.header`
 height: 100vh!important;
  background-image:url(${(props)=>{
     return props.img
  }});
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  width:100vw;
  background-size: cover;
  background-position: center
`;
export default StyledHero;
