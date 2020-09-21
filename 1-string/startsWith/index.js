export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.filter(item => item.substring(0, 2) === '粤A').length;
}
