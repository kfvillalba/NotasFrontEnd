import React from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const ModalEliminarCategoria = ({
  open,
  onClose,
  onDelete,
  categoriaNombre,
  categoriaId,
}) => {
  if (!open) {
    return null
  }
  const eliminarCategoria = async () => {
    try {
      await axios.delete(
        `http://localhost:5272/notes-service/Categorias/Eliminar?id=${categoriaId}`
      )
      onDelete()
      onClose()
      Swal.fire({
        icon: 'success',
        title: 'Categoria eliminada',
        text: `La categoría "${categoriaNombre}" ha sido eliminada correctamente.`,
        showConfirmButton: false,
        timer: 1000,
      })
    } catch (error) {
      console.error('Error al eliminar la categoría:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intentar eliminar la categoría. Por favor, inténtalo nuevamente.',
      })
    }
  }

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-5 rounded'>
        <p className='text-black'>{`¿Estás seguro de que quieres eliminar la categoría "${categoriaNombre}"?`}</p>
        <div className='flex justify-end mt-3'>
          <button
            className='mr-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
            onClick={eliminarCategoria}
          >
            Eliminar
          </button>
          <button
            className='bg-gray-400 text-gray-800 px-3 py-1 rounded hover:bg-gray-500'
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalEliminarCategoria
