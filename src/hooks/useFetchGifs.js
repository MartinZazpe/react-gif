import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    console.log(isLoading)

    useEffect(() => {
        getGifs(category).then(newImages => setImages(newImages))
        setIsLoading(false)
    }, [])


    return {
        images: images,
        isLoading: isLoading
    }
}
