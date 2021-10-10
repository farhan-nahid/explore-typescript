console.log("Hello TypeScript");

const ts: string = "Hello World";
const year: number = 2021;
let money: number = 60;
let honey: string = "";
let Funny: boolean = true;
money = 90;
money = 8;

console.log(ts, year);

function addNum(num1: number, num2: number): number {
  return num1 + num2;
}

const outPut: number = addNum(20, 30);
console.log(outPut);

// multi purpose

/*

function add(num1: number | string, num2: number | string): number | string {
  const result: number | string = num1 + num2;
  return result;
}

const outPut1: number | string = add("adam", "san");

*/

// when function don't return

function doSum(num1: number, num2: number): void {
  console.log(num1 * num2);
}

const myName: string = "Farhan Ahmed Nahid";
