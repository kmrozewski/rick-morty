import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { fetchAsync, selectCharacter } from './characterSlice'
import { Button } from 'react-bootstrap'

const Character: React.FC = () => {
	const character = useAppSelector(selectCharacter)
	const dispatch = useAppDispatch()

	return (
		<>
			<div>Mortyyyyyy</div>
			<Button onClick={() => dispatch(fetchAsync("rick"))}>Fetch</Button>
		</>
	)
}

export default Character