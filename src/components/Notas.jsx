import React, { useState } from 'react'
import AddIcon from '../assets/AddIcon'
import SearchIcon from '../assets/SearchIcon'
import ModalEliminarNota from './ModalEliminarNota'
import ModalRegisterNota from './ModalRegisterNota'

const Notas = ({ categoriaSeleccionada, setNotaSeleccionada }) => {
  const [selectedNotaId, setSelectedNotaId] = useState(null)
  const [formRegister, setFormRegister] = useState(false)
  const [selectedNotaTitulo, setSelectedNotaTitulo] = useState('')

  return (
    <>
      <div className='flex flex-col h-full'>
        <ModalRegisterNota
          open={formRegister}
          onClose={() => {
            setFormRegister(false)
          }}
          registrar={(dataForm) => {
            setData([...data, dataForm])
          }}
        />
        <ModalEliminarNota
          open={!!selectedNotaId}
          onClose={() => setSelectedNotaId(null)}
          onDelete={() => {
            // Aquí puedes eliminar la nota de tu lista y actualizar el estado de notas
            setSelectedNotaId(null) // Cierra el modal después de eliminar la nota
          }}
          notaId={selectedNotaId}
          titulo={selectedNotaTitulo}
        />

        <section className='flex items-center justify-evenly mx-9'>
          <section className='flex flex-col'>
            <span className='text-3xl font-semibold'>
              {categoriaSeleccionada ? categoriaSeleccionada.nombre : ''}
            </span>
            <span className='text-lg text-gray-600 font-semibold'>
              {categoriaSeleccionada && categoriaSeleccionada.notas
                ? categoriaSeleccionada.notas.length
                : 0}{' '}
              notas
            </span>
          </section>

          <button onClick={() => setFormRegister(true)}>
            <AddIcon clases={'size-10'}></AddIcon>
          </button>
        </section>
        <section className='flex justify-center relative mx-6'>
          <div className='absolute text-gray-500 inset-y-0 left-0 ml-2 flex items-center '>
            <SearchIcon clases={'size-5 '}></SearchIcon>
          </div>
          <input
            placeholder='Buscar Tarea'
            className='p-1 w-full mt-0  rounded-full outline-none border pl-8 border-gray-500'
            type='text'
          ></input>
        </section>
        <section className='overflow-y-auto h-1 flex flex-col flex-grow mt-2'>
          {categoriaSeleccionada &&
            categoriaSeleccionada.notas &&
            categoriaSeleccionada.notas.map((nota, index) => {
              return (
                <button
                  key={index}
                  className='border border-gray-500 flex flex-col font-semibold px-2'
                  onContextMenu={(e) => {
                    e.preventDefault() // Evita que aparezca el menú contextual del navegador
                    setSelectedNotaId(nota.id)
                    setSelectedNotaTitulo(nota.titulo)
                  }}
                  onClick={() => setNotaSeleccionada(nota)}
                >
                  <span className='text-gray-500 text-[.8rem] self-end'>
                    {nota.fecha}
                  </span>
                  <span className='text-xl font-semibold'>{nota.titulo}</span>
                  <p
                    dangerouslySetInnerHTML={{ __html: nota.descripcion }}
                    className='font-normal text-sm text-start text-gray-600 line-clamp-2'
                  ></p>
                </button>
              )
            })}
        </section>
      </div>
    </>
  )
}

export default Notas
