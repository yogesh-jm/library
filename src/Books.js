import React, { Component } from 'react'
import BookActions from './data/BookActions'
import BookStore from './data/BookStore'

class Books extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      BookActions.loadBooks()
      this.state = { //state is by default an object
        books: BookStore.getBooks(),
      }
      Object.getOwnPropertyNames(Books.prototype).forEach((method) => {
        this[method] = this[method].bind(this);
      });
   }

   componentDidMount() {
    BookStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    BookStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
        books: BookStore.getBooks(),
    });
    console.log('new', BookStore.getBooks());
  }

   renderTableData() {
    return this.state.books.map((student, index) => {
       const { name, age } = student //destructuring
       return (
          <tr key={index}>
             <td>{name}</td>
             <td>{age}</td>
          </tr>
       )
    })
    }

   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
      return (
        <div>
        <table id='books'>
           <tbody>
              {this.renderTableData()}
           </tbody>
        </table>
     </div>
      )
   }
}

export default Books //exporting a component make it reusable and this is the beauty of react
