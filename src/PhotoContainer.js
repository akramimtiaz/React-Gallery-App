import React from 'react'
import Photo from './Photo'
import NoResult from './NoResult'

const PhotoContainer = ({data, title}) => {

    let Photos
    if(data.length > 0){
        Photos = data.map(image => 
            <Photo key={image.id} {...image}/>
        )
    }else{
        Photos = <NoResult/>
    }

    return (
        <div className="photo-container">
            <h3>{`${title} Images`}</h3>
            <ul>{ Photos }</ul>
        </div>
    )
}

export default PhotoContainer