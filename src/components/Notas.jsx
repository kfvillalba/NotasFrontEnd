import React, { useState, useEffect } from 'react'
import SearchIcon from '../assets/SearchIcon'
import ModalEliminarNota from './ModalEliminarNota'
import ModalRegisterNota from './ModalRegisterNota'

const Notas = ({ categoriaSeleccionada, setNotaSeleccionada }) => {
  const [selectedNotaId, setSelectedNotaId] = useState(null)
  const [formRegister, setFormRegister] = useState(false)
  const [selectedNotaTitulo, setSelectedNotaTitulo] = useState('')
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (categoriaSeleccionada) {
      fetchNotasPorCategoria(categoriaSeleccionada.id)
    }
  }, [categoriaSeleccionada])

  const fetchNotasPorCategoria = async (idCategoria) => {
    try {
      const response = await fetch(
        `http://localhost:5272/notes-service/Notas/Filtrar/IdCategoria?idCategoria=${idCategoria}`
      )
      if (!response.ok) {
        setData([])
        return
      }
      const notasData = await response.json()
      setData(notasData)
    } catch (error) {
      console.error('Error al obtener las notas:', error)
    }
  }

  const agregarNota = async (dataForm) => {
    try {
      await fetchNotasPorCategoria(categoriaSeleccionada.id)
      setFormRegister(false)
      const nuevaNota = data.find((nota) => nota.titulo === dataForm.nombre)
      setNotaSeleccionada(nuevaNota)
    } catch (error) {
      console.error('Error al agregar la nota:', error)
    }
  }

  return (
    <>
      <ModalRegisterNota
        open={formRegister}
        onClose={() => {
          setFormRegister(false)
        }}
        registrar={agregarNota}
        categoriaId={categoriaSeleccionada ? categoriaSeleccionada.id : null}
      />

      <ModalEliminarNota
        open={!!selectedNotaId}
        onClose={() => setSelectedNotaId(null)}
        onDelete={() => {
          const updatedData = data.filter((nota) => nota.id !== selectedNotaId)
          setData(updatedData)
          setSelectedNotaId(null)
          if (updatedData.length > 0) {
            setNotaSeleccionada(updatedData[0])
          }
        }}
        notaId={selectedNotaId}
        titulo={selectedNotaTitulo}
      />
      <div className='flex flex-col h-full'>
        <section className='flex items-center justify-between mx-9'>
          <section className='flex flex-col'>
            <span className='text-3xl font-semibold'>
              {categoriaSeleccionada ? categoriaSeleccionada.nombre : ''}
            </span>
            <span className='text-lg text-gray-600 font-semibold'>
              {data.length} notas
            </span>
          </section>

          <button onClick={() => setFormRegister(true)}>
            <div className='text-white w-12 flex justify-center items-center h-10 rounded-full font-bold bg-gray-500 pb-0.5'>
              +
            </div>
          </button>
        </section>

        {data.length === 0 ? (
          <div className='flex items-center font-bold justify-center h-full'>
            <p>No hay notas</p>
          </div>
        ) : (
          <>
            <section className='flex justify-center relative mx-6'>
              <div className='absolute text-gray-500 inset-y-0 left-0 ml-2 flex items-center '>
                <SearchIcon clases={'size-5 '}></SearchIcon>
              </div>
              <input
                placeholder='Buscar notas'
                className='p-1 w-full mt-0 rounded-full outline-none border pl-8 border-gray-500'
                type='text'
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </section>
            <section className='overflow-y-auto h-1 flex flex-col flex-grow mt-2'>
              {data.map((nota, index) => (
                <button
                  key={index}
                  className='border focus:bg-gray-300 border-gray-500 flex flex-col font-semibold px-2 bg-white '
                  onContextMenu={(e) => {
                    e.preventDefault()
                    setSelectedNotaId(nota.id)
                    setSelectedNotaTitulo(nota.titulo)
                  }}
                  onClick={() => setNotaSeleccionada(nota)}
                >
                  <span className='text-gray-500 text-[.8rem] self-end'>
                    {new Date(nota.fecha).toLocaleString('es-ES', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    })}
                  </span>
                  <span className='text-xl font-semibold'>{nota.titulo}</span>
                  <p
                    dangerouslySetInnerHTML={{ __html: nota.descripcion }}
                    className='font-normal text-sm text-start text-gray-600 line-clamp-1'
                  ></p>
                </button>
              ))}
            </section>
          </>
        )}
      </div>
    </>
  )
}

export default Notas
