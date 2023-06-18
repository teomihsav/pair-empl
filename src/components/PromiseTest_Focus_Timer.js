import React, { useRef, useState } from 'react'

const PromiseTest = () => {
  let prom = new Promise((resolve, reject) => {
    const a = 0
    if (a == 0) {
      resolve('True')
    } else {
      reject('False')
    }
  })
  prom.then(message => console.log(message)).catch(error => console.log(error))

  const main = async () => {

    // await new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     console.log('Hello')
    //     resolve()
    //   }, 1000)
    // })
    await setTimeout(() => {
      console.log('Hello')
    }, 1000)
    console.log('World')
  }

  main()

  let users = [
    { id: 1, name: "John" },
    { id: 7, name: "Pete" },
    { id: 3, name: "Mary" }
  ];

  // let someUsers = users.filter(item => item.id < 3); // immutable array
  let someUsers = users.map(item => item.name += '_Lesson');   // mutate the array
  // console.log(someUsers)
  // console.log(users)

  for (let key of someUsers) {
    console.log(key.name)
  }
  // Sort by id
  let arr = [1, 100, 15]
  users.sort((a, b) => a.id - b.id)
  // console.log('Sorted: ', users)

  // Split
  let names = 'Bilbo, Gandalf, Nazgul';

  let array = names.split(', ');
  // console.log('Array ->: ', array)
  for (let name of array) {
    // console.log(`A message to ${name}.`)
  }
  // Symbol Iteration 
  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  console.log('Range After: ', range)
  for (let num of range) {
    // console.log('Range: ', num)
  }

  // ---
  let str = "Hello";

  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    // console.log('Result: ', result.value)
  }
  // --
  let options = {
    title: "Menu",
    height: 200,
    width: 100
  };

  let { title, height, ...rest } = options;

  // console.log('OutPut: ', rest)
  // ---
  let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };

  let json = JSON.stringify(student);

  // console.log('JSON Output:', json)
  // console.log('Obj Output:', JSON.parse(json))

  // --- Arrow function this"
  let group = {
    titleArrow: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach(el => console.log('Arrow this: ', this.titleArrow + ': ' + el))
    },
    // test ()  {
    //   console.log('Test')
    // }
  }

  group.showList()
  group.test = () => {
    console.log('Test')
  }
  group.test()

  // ---
  const obj = { test: 'test' }

  obj[Symbol.iterator] = function* () {
    yield 'a'
    yield 'b'
    yield 'c'
  }

  for (let key of obj) {
    // console.log(key)
  }
  // --- ref focus
  const refTyping = useRef(0)
  const refFocus = useRef()
  const timerId = useRef()
  const [typing, typingSet] = useState('')
  const [seconds, secondsSet] = useState(0)
  let test = 10
  const handleTyping = (e) => {
    typingSet(e.target.value)
    refTyping.current++
  } 
  const handleFocus = () => {
    refFocus.current.focus()
  }
  const startTimer = () => {
     timerId.current = setInterval(() => {
      secondsSet(prev => prev + 1)
    }, 1000)
  }
  const stopTimer = () => {
    clearInterval(timerId.current)
  }
  const resetTimer = () => {
    clearInterval(timerId.current)
    secondsSet(0)
    // timerId.current = 0 // or
  }
  test = 0
  return <div>
    <input ref={refFocus} type='text' onChange={handleTyping} />
    <p>{typing}</p>
    <p>Typy count: {refTyping.current}</p>
    <button onClick={handleFocus}>Focus</button>
    <br/>
    <button onClick={startTimer}> Start </button>
    <button onClick={stopTimer}> Stop </button>
    <button onClick={resetTimer}> Reset </button>
    <div>{seconds}</div>
    <p>{test}</p>
  </div>
}

export default PromiseTest