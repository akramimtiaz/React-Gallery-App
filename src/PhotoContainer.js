import React from 'react'
import Photo from './Photo'
import NotFound from './NotFound'

const PhotoContainer = ({data}) => {

    let Photos = data.map(image => 
        <Photo key={image.id} {...image}/>
    )

    return (
        <div className="photo-container">
            {
                data.length === 0 ? 
                <NotFound/>
                :
                <React.Fragment>
                    <h2>Results</h2>
                    <ul>{Photos}</ul>
                </React.Fragment>
            }
      </div>
    )
}

export default PhotoContainer