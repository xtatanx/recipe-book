const collectItems = (key, obj) => {
  let flag = true;
  let index = 1;
  const result = [];
  while (flag) {
    if (obj[`${key}${index}`] && obj[`${key}${index}`].trim()) {
      result.push(obj[`${key}${index}`]);
      index++;
    } else {
      flag = false;
    }
  }

  return result;
};

export default collectItems;
