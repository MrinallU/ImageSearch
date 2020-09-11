// NOTE: state = is a good shortcut for initialization
// e => is short for the event paprmateer sepific ofr events (props wont work)
// Event functs incliude on InputChange, onSubmit and onClick
import React from 'react';
class SearchBar extends React.Component{
  state = {term: ''};

  onFormSubmit = event =>  {
      event.preventDefault(); // Makes sure the submit doesnt reload the page
      this.props.onSubmit(this.state.term); // Sets the prop for the funct on App to the term
  }
  render(){
    return(
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
        <div className='field'>
          <label> Image Search </label>
          <input type="text"
          value={this.state.term}
          onChange={e => this.setState({term: e.target.value})}
           />
          </div>
        </form>


      </div>
    );
  }
}
export default SearchBar;
