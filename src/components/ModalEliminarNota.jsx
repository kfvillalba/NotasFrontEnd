import React from 'react'

const ModalEliminarNota = ({ open, onClose, onDelete, notaNombre }) => {
  if (!open) {
    return null
  }

  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-5 rounded'>
        <p>{`¿Estás seguro de que quieres eliminar la nota "${notaNombre}"?`}</p>
        <div className='flex justify-end mt-3'>
          <button
            className='mr-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
            onClick={() => {
              onDelete()
              onClose()
            }}
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

export default ModalEliminarNota
