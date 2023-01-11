import { useState } from "react"
import PropTypes from "prop-types"

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
        onNewCategory(trimmedInput)
        SetInputValue('')
        setCategories(categories => [inputValue, ...categories])
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}