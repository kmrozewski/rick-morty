import axios from 'axios'

// https://rickandmortyapi.com/api/character/?name=rick

export interface Character {
	id: number,
	name: string,
	status: string,
	species: string,
	image: string
}

export const fetchCharacter = async (name: string): Promise<Character> => {
	const response = await axios({
		method: "GET",
		url: `https://rickandmortyapi.com/api/character/?name=${name}`
	})

	return response.data
}


