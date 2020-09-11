import React, {Component} from 'react';

class ImageCard extends React.Component {
    render() {
        function sayHello(name, url) {
            if (name === "null") {
                sayHello("No description available!");
            }else{
                console.log(url);
                alert(name, <a href={url} download> </a>);

            }

        }
        return (
            <div>
                <img
                    alt={this.props.image.description}
                src={this.props.image.urls.regular}
                     onClick={() => sayHello(String(this.props.image.description), String(this.props.image.urls.regular))}/>
            </div>
        );
    }
}

export default ImageCard;