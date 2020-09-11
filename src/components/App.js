import React from 'react';
import unsplash from '../api/unsplash'; // .. means go up a directory
import SearchBar from './SearchBar';
import ImageList from './ImageList';
class App extends React.Component{
    state = {images:[]  }; //Sets a array of images
   onSearchSubmit = async term  =>  {            // gets the term from the class with af and with async
      const response = await unsplash.get('/search/photos', { // We have a funct in unsplash file including base url and authentication
        params: {
            query: term    // Sets parameters of the search and the search term as the prop from user input
        },
    });
      this.setState({images: response.data.results}); // Makes the images into a array.
  };

  render() {
    return (

    <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit}/>
         <ImageList image={this.state.images}/>
    </div>
  );
  }
}
export default App;
