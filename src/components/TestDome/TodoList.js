import React, { Component } from 'react'

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (<ul>
      {items.map((item, index) =>
        <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)} />)}
    </ul>);
  }

  handleItemClick(item, event) {
    // Write your code here
    if (!item.done) {
      this.props.onItemClick(item, event)
    } 
  }
}

const items = [{ text: 'Buy grocery', done: true },
{ text: 'Play guitar', done: false },
{ text: 'Romantic dinner', done: false }
];

export default class CompClass extends Component {
  render() {
    return (
      <TodoList
        items={items}
        onListClick={(event) => console.log("List clicked!")}
        onItemClick={(item, event) => { console.log(item, event) }}
      />
    )
  }
}