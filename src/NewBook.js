import React from "react";
import BookActions from './data/BookActions'
import BookStore from './data/BookStore'

export default class NewBook extends React.Component {
    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
        BookActions.loadBooks()
        this.state = {
                formData: {},
                books: BookStore.getBooks(),
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
    const { formData } = this.state;
    event.preventDefault();
    let newBook =  {name: formData.name, age: formData.age} 
    let books = this.state.books;
    books.push(newBook);
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

