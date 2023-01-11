import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"
import PropTypes from 'prop-types'
jest.mock('../../src/hooks/useFetchGifs')



describe('pruebas en gifGrid', () => {


    const category = 'One punch man'

    test('debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))


    })


    test('debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render(<GifGrid category={category} />)

        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(2)
    })



    GifGrid.propTypes = {
        category: PropTypes.string.isRequired
    }




})