import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import EditorToolbar, { modules, formats } from './EditorToolbar'
import Swal from 'sweetalert2'

const NotasEdit = ({ notaSeleccionada, categoriaSeleccionada }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [descripcion, setDescripcion] = useState('')
  const [titulo, setTitulo] = useState('')

  useEffect(() => {
    if (notaSeleccionada) {
      setDescripcion(notaSeleccionada.descripcion)
      setTitulo(notaSeleccionada.titulo)
      reset()
    } else {
      setDescripcion('')
      setTitulo('')
    }
  }, [notaSeleccionada, reset])

  const editarNota = async (data) => {
    const notaActualizada = {
      id: notaSeleccionada.id,
      titulo: data.nombre,
      descripcion: descripcion,
      idCategoria: notaSeleccionada.idCategoria,
    }

    console.log('Datos a enviar a la API:', notaActualizada)

    try {
      const response = await fetch(
        `https://localhost:7009/api/Notas/Actualizar?id=${notaSeleccionada.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(notaActualizada),
        }
      )

      if (!response.ok) {
        throw new Error('Error al editar la nota')
      }

      Swal.fire({
        icon: 'success',
        title: 'Nota editada correctamente',
        showConfirmButton: false,
        timer: 1500,
      })

      console.log('Nota editada exitosamente')
    } catch (error) {
      console.error('Error al editar la nota:', error.message)
    }
  }

  if (!notaSeleccionada || categoriaSeleccionada.notas.length === 0) {
    return (
      <div className='flex items-center font-bold justify-center h-full'>
        <p>NO HAY NOTAS</p>
      </div>
    )
  }

  return (
    <>
      <form
        className='object-cover h-full relative flex flex-col'
        onSubmit={handleSubmit(editarNota)}
      >
        <section className='h-full flex flex-col relative'>
          <section className='flex flex-col'>
            <span className='text-gray-500 text-[.8rem]'>
              {notaSeleccionada &&
                new Date(notaSeleccionada.fecha).toLocaleString('es-ES', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                })}
            </span>
            <input
              className='mb-3 text-3xl font-semibold bg-transparent border-none'
              type='text'
              defaultValue={titulo}
              {...register('nombre', { required: 'Nombre Requerido' })}
            />
            <span className='message'>{errors?.nombre?.message}</span>
          </section>
          <EditorToolbar toolbarId={'t1'} />
          <header className='overflow-y-auto h-1 flex flex-col flex-grow mt-2'>
            <section>
              <div className='overflow-y-auto mt-1 rounded-lg border border-gray-300'>
                <ReactQuill
                  theme='snow'
                  name='descripcion'
                  value={descripcion}
                  onChange={setDescripcion}
                  placeholder={'Escribe la descripción aquí...'}
                  modules={modules('t1')}
                  formats={formats}
                />
                <span className='message'>{errors?.descripcion?.message}</span>
              </div>
            </section>
          </header>

          <footer className='flex justify-center gap-6 mt-5'>
            <button type='submit' variant='contained' className='bnt__primary'>
              Guardar
            </button>
          </footer>
        </section>
      </form>
    </>
  )
}

export default NotasEdit
