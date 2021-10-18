async function sayHello() {
  let message = await new Promise((res) =>
    setTimeout(() => res("hello"), 3000)
  );

  console.log(message);
  return message;
}

sayHello();
module.exports = sayHello;
