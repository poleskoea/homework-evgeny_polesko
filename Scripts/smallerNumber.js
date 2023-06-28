// 1. Напишите функцию принимающую два числа и возвращающую меньшее из них.
export default function (a, b) {
  if (a === b) return "Numbers are equal";
  return a < b ? a : b;
}
