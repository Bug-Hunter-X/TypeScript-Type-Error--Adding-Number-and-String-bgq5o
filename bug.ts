function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, '2'); // Type error if strict null checks are enabled
console.log(result);