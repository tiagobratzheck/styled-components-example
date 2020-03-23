import React from 'react'
import tree from '../images/tree.jpg'
import { Container, Cards, CardContainer } from '../styles/styles'

const Card = () => {
    return (
        <Container>
            <Cards>
                <img src={tree} alt="Avatar" />
                <CardContainer>
                    <h4><b>Jacarandá</b></h4>
                    <p>Árvore ornamental da família Bignoniaceae, nativo da Argentina, Bolívia e Sul do Brasil que se encontra ameaçada em seu habitat natural.</p>
                </CardContainer>
            </Cards>
        </Container>
    )
}

export default Card;
