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
export const filterBrand = (data, filterList) => {
  const newData = data.filter(({ brand }) => filterList.includes(brand));
  return newData;
};
export const filterColour = (data, filter) => {
  const newData = data.filter(({ colour }) => colour === filter);
  return newData;
};
export const filterSize = (data, filterList) => {
  const newData = [];
  for (const i in data) {
    for (const j in filterList) {
      if (i === j) {
        newData.push(i);
      }
    }
  }
  return newData;
};
