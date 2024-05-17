import React, { useState, useEffect } from 'react'
import SideNavbar from '../components/SideNavbar'
import Notas from '../components/Notas'
import NotasEdit from '../components/NotasEdit'
import { fetchNotas } from '../components/fetch'

const DashboardPage = () => {
  const [categorias, setCategorias] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const [notaSeleccionada, setNotaSeleccionada] = useState(null)

  useEffect(() => {
    fetchNotas()
      .then((data) => {
        setCategorias(data)
        setCategoriaSeleccionada(data[0])
        setNotaSeleccionada(data[0].notas[0])
      })
      .catch((error) => {
        console.error('Error al obtener categorías y notas:', error)
      })
  }, [])

  return (
    <div className='flex w-screen h-screen'>
      <section className='w-1/6'>
        <SideNavbar
          categorias={categorias}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
          setNotaSeleccionada={setNotaSeleccionada}
          setData={setCategorias}
        />
      </section>
      <section className='w-1/3 p-2 bg-slate-200'>
        <Notas
          categorias={categorias}
          categoriaSeleccionada={categoriaSeleccionada}
          setNotaSeleccionada={setNotaSeleccionada}
        />
      </section>
      <section className='w-1/2 p-2 bg-slate-100'>
        <NotasEdit
          notaSeleccionada={notaSeleccionada}
          categoriaSeleccionada={categoriaSeleccionada}
        />
      </section>
    </div>
  )
}

export default DashboardPage
