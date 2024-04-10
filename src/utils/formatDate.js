const formatDate = (date) => {
  return new Date(date).toLocaleDateString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}

export default formatDate
