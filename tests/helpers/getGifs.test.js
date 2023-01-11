import { string } from "prop-types"
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {



    test('debe de retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBeGreaterThan(0)
    })


    test('los gifs deben tener id, title y url de tipo string', async () => {
        // expect(gifs[0]).toEqual({
        //     id: expect.any(String),
        //     title: expect.any(String),
        //     url: expect.any(String)
        // })
        const gifs = await getGifs('One Punch')
        gifs.forEach(gif => expect(gif).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        }))
    })

})