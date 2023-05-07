import { PokemonSkill } from "../../../../types/Pokemons"

export const getColorByPokemonSkill = (skill: PokemonSkill) => {
  switch(skill) {
    case 'bug': return 'green'
    case 'grass': return 'lightgreen'
    case 'fire': return 'red'
    case 'water': return 'blue'
    case 'electric': return 'yellow'
    case 'poison': return 'purple'
    case 'ground': return 'brown'
    default: return 'gray'
  }
}