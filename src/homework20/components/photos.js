import React from 'react';

const RANDOM_PHOTO = "https://source.unsplash.com/300x300/?autumn";
const gallerySize = 9;

let imageArray = [];

for (let i = 0; i < gallerySize; i++) {
    imageArray = [...imageArray, {id: i+100, imageSourse: RANDOM_PHOTO+'+'+i}];
}

function ArrayOfImages (props) {
    
    return (
        <div className="gallery_image">
            <img src={props.src} alt="gallery_image"></img>
        </div>
    )
}



const Photos = () => {
    return (
    <div className="gallery_container">

        {imageArray.map(image => 
                <ArrayOfImages key={image.id} src={image.imageSourse}/>
            )}
    </div>
    )
}

export default Photos;