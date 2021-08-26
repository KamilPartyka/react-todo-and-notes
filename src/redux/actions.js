export const removeItem = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: {
    itemType,
    id,
  },
});

export const addItem = (itemType, itemContent) => {
  const idGenerator = () => `_${Math.random().toString(36).substr(2, 9)}`; // from https://gist.github.com/gordonbrander/2230317

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: idGenerator(),
        ...itemContent,
      },
    },
  };
};
