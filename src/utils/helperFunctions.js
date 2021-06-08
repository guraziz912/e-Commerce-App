export const findItem = (dataList, itemId) => {
  const item = dataList.find((obj) => obj.id === itemId);
  if (item) {
    return item;
  } else {
    return 0;
  }
};
export const productMapper = (data, payload) => {
  const item = data.find((item) => item.id === payload);
  return item;
};
