import React from 'react';
import Books from './Books';
import NewBook from './NewBook';

class LibraryHome extends React.Component  {

    state = {
        show: false
    };

    showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };

    render() {
          
        return (
            <div className="LibraryHome">
              <div>
                <button  onClick={e => {this.showModal(e);} }> Add Book </button>
                <NewBook onClose={this.showModal} show={this.state.show}/>
              </div>
              <Books/>      
            </div>
        );
    }
}

export default LibraryHome;
