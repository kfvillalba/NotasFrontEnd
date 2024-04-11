import React, { useState } from 'react'
import SideNavbar from '../components/SideNavbar'
import Notas from '../components/Notas'
import NotasEdit from '../components/NotasEdit'

const DashboardPage = () => {
  const [categorias, setCategorias] = useState([
    {
      nombre: 'Cloud',
      notas: [
        {
          nombre: 'Tarea1',
          descripcion: 'hola que tal amigos de youtube',
          fecha: '2024-04-10',
        },
        {
          nombre: 'Tarea2',
          descripcion: 'hola que tal amigos de youtube',
          fecha: '2024-04-10',
        },
        {
          nombre: 'Tarea3',
          descripcion: 'hola que tal amigos de youtube',
          fecha: '2024-04-10',
        },
        {
          nombre: 'Tarea4',
          descripcion: 'hola que tal amigos de youtube',
          fecha: '2024-04-10',
        },
      ],
    },
    {
      nombre: 'NoCloud',
      notas: [
        {
          nombre: 'Tarea2',
          descripcion: 'hola que tal amigos de youtube',
          fecha: '2024-04-10',
        },
      ],
    },
  ])

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(
    categorias[0]
  )

  return (
    <div className='flex w-screen h-screen'>
      <section className='w-1/6'>
        <SideNavbar
          categorias={categorias}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      </section>
      <section className='w-1/3 p-2 bg-slate-200'>
        <Notas
          categorias={categorias}
          categoriaSeleccionada={categoriaSeleccionada}
        />
      </section>
      <section className='w-1/2 p-2 bg-slate-100'>
        <NotasEdit />
      </section>
    </div>
  )
}

export default DashboardPage
