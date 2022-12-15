import React, { useEffect, useState } from 'react';
import S from './styles'


export const Home = () => {

    const [users, setUsers] = useState<any | undefined>(undefined);

    const getData= () => {
        fetch('./fazenda.json', {
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setUsers(myJson.data);
        });
    }

    useEffect(()=>{
        getData()
    }, []);

    return (
        <S.Container>
            <ul>
                {users !== undefined && users.map((item: any, index: number) => {

                    let sumPositiveNegative = Number(item.positive) + Number(item.negative);

                    let resultPercentPositive = (Number(item.positive) / sumPositiveNegative) * 100;
                    let resultPercentNegative = (Number(item.negative) / sumPositiveNegative) * 100;

                    return (
                        <li key={index}>
                            <S.Card>
                                <S.Item>
                                    <S.FigureImage>
                                        <img src={item.picture} />
                                    </S.FigureImage>
                                    <span>{index+1}</span>
                                </S.Item>
                                <S.Item>
                                    <S.NamePerson>{item.name}</S.NamePerson>
                                    <p>{item.description}</p>
                                </S.Item>
                                <S.ResultContainer>
                                    <S.Item>
                                        <p>Gostam</p>
                                        <p>{Math.round(resultPercentPositive)}%</p>
                                    </S.Item>
                                    <S.Item>
                                        <p>Não gostam</p>
                                        <p>{Math.round(resultPercentNegative)}%</p>
                                    </S.Item>
                                </S.ResultContainer>
                            </S.Card>
                        </li>
                    );
                })}
            </ul>
        </S.Container>
    )
}