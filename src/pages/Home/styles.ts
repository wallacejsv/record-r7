import styled from "styled-components";

const Container = styled.div`
    max-width: 100%;
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 50px;
    ul {
        list-style: none;
    }
`

const Card = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 25px;
    padding: 20px;
    &.item-two {
        background-color: #ddd;
    }
    &:hover {
        background-color: #ccc;
    }
`

const Item = styled.div`
    position: relative;
    span {
        background: #fff;
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 100px;
        height: 25px;
        width: 25px;
        color: #000;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #000;
    }
    img {
        max-width: 150%;
    }
`

const FigureImage = styled.figure`
    width: 80px;
    height: 80px;
    overflow: hidden;
    border-radius: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`

const NamePerson = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #800000;
`
const ResultContainer = styled.div`
    display: flex;
    position: absolute;
    right: 20px;
    text-align: center;
    gap: 20px;
`

export default {
    Container,
    Card,
    Item,
    NamePerson,
    FigureImage,
    ResultContainer
}