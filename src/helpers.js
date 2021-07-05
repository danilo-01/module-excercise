
// Selects a random item from an array
const choice = (items) => {
    const idx = Math.floor(Math.random() * items.length);
    return items[idx];
}
// Removes a specified item from an array and returns removed item
const remove = (items, item) => {
    const idx = items.indexOf(item);
    if(idx === -1) return undefined;
    return items.splice(idx, 1)
}

export { choice, remove };