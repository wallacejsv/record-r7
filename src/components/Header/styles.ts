import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Item = styled.div`
  &.img {
    z-index: 1;
  }
  &.bg-white {
    background-color: #fff;
    width: 100%;
    padding: 15px;
    padding-left: 20px;
    position: relative;
    /* left: -50px; */
    top: -17px;
  }
`;

const TitleH1 = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
`

export default {
  Container,
  Item,
  TitleH1
}