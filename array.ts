const numArray: number[] = [1, 2, 3, 4, 5, 6];
const myStr: string[] = ["aa", "bb", "cc", "dd"];

numArray.push(20);
numArray[2] = 20;

myStr.push("ee");
myStr[2] = "ff";

let max = 0;
for (const num of numArray) {
  if (num > max) {
    max = num;
  }
}
