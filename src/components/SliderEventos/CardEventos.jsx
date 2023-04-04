import React from 'react'
import Button from '../../utils/Button/Button'
import { BottomLugar, CardContainer, TopFecha } from './CardEventos.Styled'

const CardEventos = ({ fecha, lugar, title,img,slug }) => {
  return (
    <CardContainer img={img}>
      <TopFecha>
        <span>{fecha}</span>
        <h4>{title}</h4>
      </TopFecha>
      <BottomLugar>
        <span>{lugar}</span>
        <Button type="primary" size="sm" text="Participar" link={`/evento/${slug}`} />
      </BottomLugar>
    </CardContainer>
  )
}

export default CardEventos
