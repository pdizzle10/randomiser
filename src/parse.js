const parseItems = (data) => {
  if (data.length === 0) throw new Error("No data detected")

  const items = data.split("\n")

  if (items.length === 1) throw new Error("Only one item detected")

  return items
}

export default parseItems
