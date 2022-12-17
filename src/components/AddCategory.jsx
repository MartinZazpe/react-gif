import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, SetInputValue] = useState('')

    const onInputChange = (event) => {
        // console.log(event.target.value)
        SetInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const trimmedInput = inputValue.trim()
        if (trimmedInput.length <= 1) return
        // setCategories(categories => [inputValue, ...categories])
        onNewCategory(trimmedInput)
        SetInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
