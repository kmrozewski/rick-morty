import React from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { Character } from './characterApi'

import './character.css'

export interface CharacterPreview {
	character: Character
}

const Preview: React.FC<CharacterPreview> = (props: CharacterPreview) => {
	return (
		<Card>
			<Card.Img id={"characterImage"} className={"rounded"} as={Image} variant="top" src={props.character.image} alt={"Character image"} fluid/>
			<Card.Body>
				<Card.Title>{props.character.name}</Card.Title>
				<ListGroup variant="flush">
					<ListGroup.Item id={"characterStatus"}>{props.character.status}</ListGroup.Item>
					<ListGroup.Item id={"characterSpecies"}>{props.character.species}</ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default Preview