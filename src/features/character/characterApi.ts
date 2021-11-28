import axios from 'axios'

const PROTOCOL = 'https'
const DOMAIN = 'rickandmortyapi.com'


export interface Character {
	id: number,
	name: string,
	status: string,
	species: string,
	image: string
}

export interface CharacterResponse {
	info: CharacterInfo
	results: Character[]
}

export interface CharacterInfo {
	count: number,
	pages: number,
	next: string,
	prev: string
}

export const fetchCharacter = async (name: string): Promise<CharacterResponse> => {
	const response = await axios({
		method: 'GET',
		url: `${PROTOCOL}://${DOMAIN}/api/character/?name=${name}`
	})

	return response.data
}

export const getSingleCharacter = async (id: number): Promise<Character> => {
	const response = await axios({
		method: 'GET',
		url: `${PROTOCOL}://${DOMAIN}/api/character/${id}`
	})

	return response.data
}