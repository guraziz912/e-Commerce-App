export const findItem = (dataList, itemId) => {
  const item = dataList.find((obj) => obj.id === itemId);
  if (item) {
    return item;
  } else {
    return 0;
  }
};
