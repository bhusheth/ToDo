import React from 'react';
//importing css file so we can style the list to do.
import "../css/listToDo.css";
// This file is for the item list and how we are desplaying the items in the list.
class ListToDo extends React.Component{
    constructor(props){
        super(props);
        this.Task = this.Task.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
  Task(item) {
      return (
          <div className="task">
              <li key={item.key}>{item.text}<button onClick={() => this.delete(item.key)}>X</button></li>
          </div>
      );
  }
  render() {
      var toDoEntries = this.props.entries;
      var listitems = toDoEntries.map(this.Task);
      return <ol className="theList" > {listitems}</ol >
  }
};

//exporting class so we can use it through out the application.
export default ListToDo;
