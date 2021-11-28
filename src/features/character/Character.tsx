import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { RootState } from "../../app/store"
import { previous, next, search, fetchSingleCharacter, selectCharacter, selectCurrent } from './characterSlice'
import { Button, Container, Spinner } from 'react-bootstrap'
import Preview from './Preview'

import './character.css'


const Character: React.FC = () => {
	// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

	const character = useAppSelector(selectCharacter)
	const current = useAppSelector(selectCurrent)
	// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
	const status = useSelector((state: RootState) => state.character.status)
	const dispatch = useAppDispatch()

	useEffect(() => console.log('character changed', character), [character])
	useEffect(() => {
		console.log('dispatching search')
		dispatch(fetchSingleCharacter(current))
	}, [current])

	return (
		<>
			{status === 'idle' ?
				(<>
					<Preview character={character} />
					<Button className={"right15"} onClick={() => dispatch(fetchSingleCharacter(1))}>Fetch first</Button>
					<Button className={"right15"} onClick={() => dispatch(next())}>Next character</Button>
					<Button className={"right15"} onClick={() => dispatch(previous())}>Previous character</Button>
				</>) :
				(<Spinner animation="border"/>)}
		</>
	)
}

export default Character