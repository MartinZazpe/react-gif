import { renderHook } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en el hook useFetchGifs', () => {


    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('One punch'))
        const { images, isLoading } = result.current
        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })


    test('debe de retornar un arreglo de imagenes y isLoading en false', () => {

    })


})