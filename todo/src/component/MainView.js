import React from 'react';
//Importing listToDo so we can use the functionality of that class.
import ListToDo from './listToDo';
//importing css file so we can style the list to do.
import "../css/listToDo.css"

class mainView extends React.Component{
    constructor(props){
        super(props);
        // In state, i am putting items array. Which we will access later on.
        this.state ={
            items: [],
        }
        // Binding the addItem and deleteItem methos it will know where to update.
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }
    // Here, we are creating addItem which will check the input value which is fetched from the input tag. Will also check the previous state of an item array and see if we have any elements inside and will concat to it. Prevent default is used for the state prevention.
    addItem(e){
        if(this.inputValue.value !== ""){
            var newItem = {
                text: this.inputValue.value,
                key: Date.now()
            };
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });
            this.inputValue.value = "";
        }
        console.log(this.state.items);
        e.preventDefault();
    }
    // Here, we are deleting an items using the key we are providing in the add item usinf the date time stamp.
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });    
    }
    render() {
      return (
        <div className="todoListMain">
              <div className="header">
                <form onSubmit={this.addItem}>
                      <input ref={(a) => this.inputValue = a} type="text" name="inputName" placeholder="New" />
                      <button type="submit">+</button>
                </form>
            </div>
            {/* Importing ListToDo class so we can see the result of the class which is the list of an items. */}
              <ListToDo className="ListToDo" entries={this.state.items} delete={this.deleteItem} />
        </div>
      )
    }
}
//exporting class so we can use it through out the application.
export default mainView;