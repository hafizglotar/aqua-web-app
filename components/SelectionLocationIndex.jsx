import React from 'react'
import SelectLocationBox from './SelectLocationBox'

const SelectionLocationIndex = () => {
    return (
        <div className='flex gap-10'>
            <SelectLocationBox
                boxThumbail="/images/selection-thumbnail.webp"
                boxLogo="/images/selection-logo.svg"
                boxText="The Selection by AQUA Properties features Dubai's finest high-end villas and luxury apartments for sale and rent."
            />            
            <SelectLocationBox
                boxThumbail="/images/locations-thumbnail.webp"
                boxLogo="/images/locations-logo.svg"
                boxText="Enjoy a luxurious vacation getaway with our short-term rentals, featuring prime locations, exceptional amenities, and unforgettable experiences."
            />            
        </div>
    )
}

export default SelectionLocationIndex