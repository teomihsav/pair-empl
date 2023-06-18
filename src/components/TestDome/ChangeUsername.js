// import React, { Component } from 'react'

// // React is loaded and is available as React and ReactDOM
// // imports should NOT be used
// class Username extends Component {
//   state = { value: "" };
  
//   changeValue(value) {
//     this.setState({ value });
//   }

//   render() {
//     const { value } = this.state;
//     return <h1>{value}</h1>;
//   }
// }

// export default function ChangeUsername() {
//     const ref = React.useRef()
//   const inputRef = React.useRef()
//   function clickHandler(e) {
//     console.log(inputRef.current.value)
//     // setState({ value: inputRef.current.value })
//   }

//   return (
//     <div>
//       <button onClick={clickHandler}>Change Username</button>
//       <input ref={inputRef} type="text" />
//       <Username value={inputRef} />
//     </div>
//   );
// }

import React, { Component } from 'react'

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Username extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  changeValue(value) {
    this.setState({ value: 'Test' });
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

export default class ChangeUsername extends React.Component {
  constructor(props) {
    super(props);
    this.userNameRef = React.createRef();
  }

  clickHandler() {
    var name = document.getElementById('name_input').value;
    this.userNameRef.current.setState({ value: name });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler.bind(this)}>Change Username</button>
        <input id="name_input" type="text" />
        <Username ref={this.userNameRef} />
      </div>
    );
  }
}