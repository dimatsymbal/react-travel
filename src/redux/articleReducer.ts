import { createSlice } from '@reduxjs/toolkit'
import { omit } from 'lodash'

type ArticleType = {
    [id: number]: number
}

export const initialState: ArticleType = {}

export const articleSlice = createSlice({
    name: 'articlesInFav',
    initialState,
    reducers: {
        addAricleToFav: (state, action) => ({
            ...state,
            [action.payload.id]: state[action.payload.id],
        }),

        removeArticleFromFav: (state, action) => omit(state, action.payload),
    },
})

export const { addAricleToFav, removeArticleFromFav } = articleSlice.actions

export default articleSlice.reducer
