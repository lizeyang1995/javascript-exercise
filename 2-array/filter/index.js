function chooseMultiplesOfThree(collection) {
  // TODO 1: 在这里写实现代码
  return collection.filter(item => item % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  // TODO 2: 在这里写实现代码
  const result = [];
  collection.forEach(item => {
    if (result.indexOf(item) === -1) {
      result.push(item);
    }
  });
  return result;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
