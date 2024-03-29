import React, { useState, useEffect } from 'react'
import PanelDivisor from '../components/PanelDivisor'
import DeleteIcon from '../assets/DeleteIcon'
import EditIcon from '../assets/EditIcon'
import ModalRegisterClientes from '../components/ModalRegisterClientes'
import ModalEditClientes from '../components/ModalEditClientes'
import Swal from 'sweetalert2'

const Page = () => {
  const [clientes, setclientes] = useState()

  useEffect(() => {
    fetch('https://localhost:7127/api/Clientes/Consultar')
      .then((responde) => responde.json())
      .then((clientes) => setclientes(clientes))
  }, [clientes])

  const [formRegister, setformRegister] = useState(false)
  const [formEdit, setformEdit] = useState(false)

  const eliminarclientes = () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'No podra deshacer este cambio!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borralo!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Borrado!',
          text: 'Se ha borrado con exito',
          icon: 'success',
        })
      }
    })
  }

  return (
    <>
      <ModalRegisterClientes
        open={formRegister}
        onClose={() => {
          setformRegister(false)
        }}
        registrar={(dataForm) => {
          console.log(dataForm)
          setclientes([...clientes, dataForm])
          //aca logica
        }}
      />
      {
        <ModalEditClientes
          open={formEdit}
          onClose={() => {
            setformEdit(false)
          }}
          editar={(dataForm) => {
            console.log(dataForm)
            //con esta dataForm modifican
          }}
        />
      }
      <div className='p-5  shadow-md rounded-sm shadow-black h-full'>
        <h3>Lista clientes</h3>
        <section>
          <button
            onClick={() => setformRegister(true)}
            className='bnt__primary'
          >
            Agregar clientes
          </button>
        </section>

        <section className='flex flex-col my-5'>
          <label className='label__form' htmlFor='textBuscarclientes'>
            Buscar clientes
          </label>
          <input className='input__form' id='textBuscarclientes' type='text' />
        </section>

        <div className='h-3/4 overflow-y-auto snap-y shadow-sm shadow-black rounded-sm'>
          <table className='w-full '>
            <thead className='[&>tr>th]:sticky [&>tr>th]:top-0 [&>tr>th]:py-2 [&>tr>th]:bg-purple-light [&>tr>th]:text-white'>
              <tr>
                <th className='text-start pl-3'>Nombre</th>
                <th className='text-start pl-3'>Celular</th>
                <th className='text-start pl-3'>Correo</th>
                <th className='text-center w-28'>Editar</th>
                <th className='text-center w-28'>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {clientes?.map((clientes, index) => {
                return (
                  <tr className='even:bg-slate-100' key={index}>
                    <td className='pl-3'>{clientes.nombre}</td>
                    <td className='pl-3'>{clientes.celular}</td>
                    <td className='pl-3'>{clientes.correo}</td>
                    <td className='text-center text-blue-800'>
                      <button onClick={() => setformEdit(true)}>
                        <EditIcon clases={'size-7 cursor-pointer'} />
                      </button>
                    </td>
                    <td className='text-center text-red-800'>
                      <button onClick={eliminarclientes}>
                        <DeleteIcon clases={'size-7 cursor-pointer'} />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
const Pageclientes = () => {
  return <PanelDivisor Page={<Page />} />
}

export default Pageclientes
