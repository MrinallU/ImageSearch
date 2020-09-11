import './ImageList.css';
import React from "react";
import ImageCard from './ImageCard';
const ImageList = props =>{

 const  images = props.image.map((image) => {
        return(
           <ImageCard key={image.id} image={image} />
        )
    });

    return(
        <div className='image-list'>Images {images.length} found  {images}</div>
    ) ;
}
export default  ImageList;