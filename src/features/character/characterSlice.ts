import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCharacter, Character } from './characterApi'

export interface CharacterState {
	value: {}
	status: 'idle' | 'loading' | 'failed'
}

const initialState: CharacterState = {
	value: [],
	status: 'idle'

}

export const fetchAsync = createAsyncThunk(
	'character/fetchCharacter',
	async (name: string) => {
		const result = await fetchCharacter(name)
		console.log(result)
		return result
	}
)

export const characterSlice = createSlice({
	name: 'character',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  }
})

export const selectCharacter = (state: RootState) => state.character.value;

export default characterSlice.reducer