export const findItem = (dataList, itemId) => {
  const item = dataList.find((obj) => obj.id === itemId);
  if (item) {
    return item;
  } else {
    return 0;
  }
};
export const productMapper = (data, itemId) => {
  const item = data.find((item) => item.id === itemId);
  return item;
};

export const productFilter = (data, item) => {
  const newData = data.filter((obj) => obj !== item);
  return newData;
};

export const checkIfPresent = (data, item) => {
  if (data.includes(item)) {
    return true;
  } else {
    return false;
  }
};
export const checkIfTrue = (data, obj) => {
  for (let [key, value] of Object.entries(obj)) {
    if (value === true) {
      data.push(key);
    }
  }
  return data;
};
