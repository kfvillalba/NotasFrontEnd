export const fetchNotas = async () => {
  const response = await fetch(
    'https://localhost:7001/notes-service/Categorias/ConsultarTodo'
  )
  return await response.json()
}

export default fetchNotas
