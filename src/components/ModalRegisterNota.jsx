import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const ModalRegisterNota = ({ open, onClose, registrar, categoriaId }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      data.descripcion = ''
      data.idCategoria = categoriaId
      console.log(data)
      const response = await fetch(
        'http://localhost:5272/notes-service/Notas/Agregar',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        registrar(data)
        onClose()
        reset()
        Swal.fire({
          icon: 'success',
          title: 'Nota guardada',
          text: 'Te invito a agregarle una descripción a la nota',
          showConfirmButton: false,
          timer: 1000,
        })
      } else {
        throw new Error('Error al guardar la nota')
      }
    } catch (error) {
      console.error(error)
      Swal.fire({
        icon: 'error',
        title: 'Error al guardar la nota',
        text: error.message,
      })
    }
  }
  if (!open) return null

  return (
    <div className='fixed w-full top-0 left-0 h-full z-10 flex items-center justify-center bg-black/50'>
      <div className=''>
        <form
          className='bg-white rounded-lg shadow-sm p-5'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor='titulo' className='label__form'>
              Nombre de la nota
            </label>
            <input
              id='titulo'
              type='text'
              className='input__form'
              {...register('titulo', {
                required: {
                  value: true,
                  message: 'El nombre es obligatorio',
                },
              })}
            />
            <span className='message'>{errors?.titulo?.message}</span>
          </div>

          <div className='flex gap-4 justify-center'>
            <button type='submit' className='bnt__primary mt-3'>
              Aceptar
            </button>
            <button
              onClick={() => {
                reset()
                onClose()
              }}
              className='bnt__danger mt-3 '
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ModalRegisterNota
