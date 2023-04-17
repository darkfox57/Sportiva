import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { MainContainer } from './Desuscripcion.Styles'
import { SubmitButton } from '../../utils/Form_Involucrate/Form_Involucrate.Styles'
import { deleteFormSuscriptioin } from '../../redux/actions/form_actions'

export default function Desuscripcion() {
  const [searchparams] = useSearchParams()
  const email = searchparams.get('email')

  const dispatch = useDispatch()
  const MySwal = withReactContent(Swal)

  const handleDesuscription = () => {
    try {
      dispatch(deleteFormSuscriptioin(email))
      return notification()
    } catch (error) {
      errorNotify()
    }
  }

  const notification = async () => {
    await MySwal.fire({
      icon: 'success',
      title: 'Proceso exitoso',
      text: 'Te has desuscripto exitosamente',
    })
  }

  const errorNotify = async () => {
    await MySwal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Lo sentimos, el proceso de desuscripcion ha fallado!',
    })
  }

  return (
    <MainContainer>
      <h3>Cancelacion</h3>

      <span>
        Haga clic en "Cancelar suscripción" para dejar de recibir mensajes de
        este remitente a esta dirección de correo electrónico: Haga clic en
        "Cancelación" para dejar de recibir mensajes de este remitente a esta
        dirección de correo electrónico:
        <strong></strong>
      </span>

      <SubmitButton onClick={handleDesuscription}>
        Cancelar suscripcion
      </SubmitButton>
    </MainContainer>
  )
}