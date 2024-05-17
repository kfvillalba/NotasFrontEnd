import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LogOutIcon from '../assets/LogOutIcon'
import AddIcon from '../assets/AddIcon'
import ModalRegisterCategoria from './ModalRegisterCategoria'
import ModalEliminarCategoria from './ModalEliminarCategoria'
import { fetchNotas } from '../components/fetch'

const SideNavbar = ({
  categorias,
  setCategoriaSeleccionada,
  setNotaSeleccionada,
  setData,
}) => {
  const [formRegister, setformRegister] = useState(false)
  const [selectedCategoria, setSelectedCategoria] = useState(null)
  const Navigate = useNavigate()

  const Logout = () => {
    localStorage.clear()
    console.log(localStorage)
    Navigate('/login')
  }

  const handleRegisterCategoria = (dataForm) => {
    setData([...categorias, dataForm])
    setCategoriaSeleccionada(dataForm)
    setformRegister(false)
  }

  return (
    <nav className='bg-purple-dark object-cover h-full text-gray-300 relative flex flex-col'>
      <ModalRegisterCategoria
        open={formRegister}
        onClose={() => {
          setformRegister(false)
          fetchNotas().then((notas) => setData(notas))
        }}
        registrar={handleRegisterCategoria}
      />
      <ModalEliminarCategoria
        open={!!selectedCategoria}
        onClose={() => setSelectedCategoria(null)}
        onDelete={() => {
          fetchNotas().then((data) => {
            setData(data)
            setCategoriaSeleccionada(data[0])
            setNotaSeleccionada(data[0].notas[0])
          })
          setData(
            categorias.filter(
              (categoria) => categoria.id !== selectedCategoria.id
            )
          )
          setSelectedCategoria(null)
        }}
        categoriaNombre={selectedCategoria ? selectedCategoria.nombre : ''}
        categoriaId={selectedCategoria ? selectedCategoria.id : ''}
      />

      <section className='flex-wrap'>
        <header className='Profile flex flex-wrap items-center p-5'>
          <img
            className='rounded-full size-12'
            src={localStorage.getItem('photoURL')}
            alt='avatar'
          />
          <div className='ml-3'>
            <p>{localStorage.getItem('displayName')}</p>
          </div>
        </header>
      </section>
      <section className='h-full [&>footer>ul>li]:mx-3 [&>header>ul>li]:mx-3 flex flex-col relative'>
        <header className='overflow-y-auto h-1 flex flex-col flex-grow mt-2 '>
          <ul>
            <li>
              <button
                className='btn__menu pl-0 flex  justify-between text-pretty pr-3 font-semibold'
                onClick={() => setformRegister(true)}
              >
                <span className='border-l-4  pl-2 border-white'>
                  Categorías
                </span>
                <div className='bg-gray-500 size-7 rounded-full text-center text-white font-bold flex justify-center items-center'>
                  +
                </div>
              </button>
            </li>
            {categorias &&
              categorias.length > 0 &&
              categorias.map((categoria, index) => {
                return (
                  <li key={index}>
                    <button
                      className='btn__menu flex justify-between pr-3 '
                      onContextMenu={(e) => {
                        e.preventDefault()
                        setSelectedCategoria(categoria)
                      }}
                      onClick={() => {
                        setCategoriaSeleccionada(categoria)
                        if (categoria.notas && categoria.notas.length > 0) {
                          setNotaSeleccionada(categoria.notas[0])
                        }
                      }}
                    >
                      <span>{categoria.nombre}</span>
                      <div className='bg-gray-500 size-7 rounded-full text-white font-semibold text-sm flex justify-center items-center'>
                        {categoria.notas ? categoria.notas.length : 0}
                      </div>
                    </button>
                  </li>
                )
              })}
          </ul>
        </header>
        <footer className='my-1'>
          <ul>
            <li>
              <button onClick={Logout} className='btn__menu  pl-10 mb-6'>
                <LogOutIcon clases={'mr-3 size-7'} />
                LogOut
              </button>
            </li>
          </ul>
        </footer>
      </section>
    </nav>
  )
}

export default SideNavbar
