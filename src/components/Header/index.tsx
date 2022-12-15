import React from 'react';
import S from './styles';

export const Header = () => {
    return (
        <S.Container>
            <S.Item className="img">
                <img src="./images/a-fazenda-logo.png" alt="Logo" title="Logo a Fezenda"/>
            </S.Item>
            <S.Item className="bg-white">
                <S.TitleH1>Ranking</S.TitleH1>
            </S.Item>
        </S.Container>
    )
}