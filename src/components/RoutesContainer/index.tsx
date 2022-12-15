import React from 'react'
import { Header } from '../Header'
import { Container } from './styles'

type Props = {
    children: React.ReactNode
}

export const RoutesContainer = ({ children }: Props) => {
    return (
      <Container>
        <Header />
        {children}
      </Container>
    )
}
