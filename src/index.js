function foo() {
  console.log('Hello,foo'); // 这里故意不缩进
}

let list = [1, 2, 3, 4, 5].map((item) => {
  return (item = item * 2);
});

console.log(list, '1111');
