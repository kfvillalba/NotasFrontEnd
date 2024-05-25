export const fetchNotas = async () => {
  const email = localStorage.getItem('email')
  if (!email) {
    throw new Error('No email found in localStorage')
  }
  const response = await fetch(
    'http://localhost:5272/notes-service/Categorias/ConsultarTodo'
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const categorias = await response.json()
  const filteredCategorias = categorias.filter(
    (categoria) => categoria.email === email
  )
  return filteredCategorias
}

export default fetchNotas
