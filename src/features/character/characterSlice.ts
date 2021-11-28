import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCharacter, getSingleCharacter, Character } from './characterApi'

export interface CharacterState {
	current: number
	value: Character
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CharacterState = {
	current: 1,
	value: {} as Character,
	status: 'idle'
}

export const fetchSingleCharacter = createAsyncThunk(
	'character/getSingleCharacter',
	async (id: number) => await getSingleCharacter(id)
)

export const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {
		previous: (state: CharacterState) => {
			state.current = state.current > 1 ? --state.current : 1
		},
		next: (state) => {
			state.current += 1
		},
		search: (state: CharacterState, action: PayloadAction<number>) => {
			state.current = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSingleCharacter.pending, (state: CharacterState) => {
				state.status = 'loading'
			})
			.addCase(fetchSingleCharacter.fulfilled, (state: CharacterState, action: PayloadAction<Character>) => {
				state.status = 'idle'

				const character = action.payload
				state.current = character.id
				state.value = character
			})
  }
})

export const { previous, next, search } = characterSlice.actions

export const selectCharacter = (state: RootState) => state.character.value
export const selectCurrent = (state: RootState) => state.character.current

export default characterSlice.reducer