function getNotes(amount, total) {
  if (total > amount) throw new Error('Purchase price is higher.')

  const exchange = Math.abs(total - amount)
  
  const notes_100 = Math.floor(exchange/100)
  const rest_100 =  exchange % 100
  const notes_10 = Math.floor(rest_100/10)
  const rest_10 = exchange % 10
  const notes_1 = Math.floor(rest_10/1)

  const data = {
    notes_100,
    notes_10,
    notes_1
  }

  return data
}

export { getNotes }
