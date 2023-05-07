export interface Pokemon {
  name: string
  url: string
}

export type PokemonSkill = 
 'shadow' |'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' |
 'unknown' | 'steel' | 'fighting' | 'ghost' |'rock' | 'grass' |
 'water' | 'flying' | 'bug' | 'normal' | 'electric' | 'ground' | 'poison' | 'fire'

export interface PokemonDetails {
  name: string
  id: number
  front_default: string
  types: PokemonSkill[]
  ['Weight']: number
  ['Total moves']: number
  ['Type']: string
  ['Attack']: number
  ['Speed']: number
  ['HP']: number
  ['Defense']: number
  ['SP Attack']: number
  ['SP Defense']: number
}

export interface PokemonStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}
