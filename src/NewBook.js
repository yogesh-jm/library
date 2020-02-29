import React from "react";
import BookActions from './data/BookActions'

export default class NewBook extends React.Component {
//   onClose = e => {
//     this.props.onClose && this.props.onClose(e);
//   };
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
            this.state = {
                formData: {},
            }

            Object.getOwnPropertyNames(NewBook.prototype).forEach((method) => {
                this[method] = this[method].bind(this);
              });
        }
    

    handleNameUpdate(event) {
        const { formData } = this.state;
        this.setState({
          formData: Object.assign(formData, { name: event.target.value }),
        });
    }

      handleAgeUpdate(event) {
        console.log('called age update', event.target.value );
        const { formData } = this.state;
        this.setState({
          formData: Object.assign(formData, { age: event.target.value }),
        });
    }

  handleSubmit(event) {
    console.log('eeee', event);
    const { formData } = this.state;
    event.preventDefault();

    let books =  [ {name: formData.name, age: formData.age}]


    BookActions.updateBooks(books);
    
  }

  render() {
    if(!this.props.show){
        return null;
    }
    return (
        <div className="modal" id="modal">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={this.handleNameUpdate}/>
                </label>
                <label>
                    Age:
                    <input type="text" name="age" onChange={this.handleAgeUpdate}/>
                </label>
               
                <input type="submit" value="Submit" />
            </form>
        </div> 
    );
  }
}

