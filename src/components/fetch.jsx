export const fetchNotas = async () => {
  const response = await fetch(
    'https://localhost:7009/api/Categorias/ConsultarTodo'
  )
  return await response.json()
}

export default fetchNotas
