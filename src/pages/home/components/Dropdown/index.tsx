import * as React from 'react'
import { useState, useRef, useEffect } from 'react';
import { PokemonSkill } from '../../../../types/Pokemons';
import * as Styled from './index.style'

interface Props {
  options: string[]
  selectedOption: string
  setSelectedOption: React.Dispatch<React.SetStateAction<PokemonSkill | ''>>
}

const Dropdown: React.FC<Props> = ({ options, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, [])

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (option: PokemonSkill | '') => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <>
      <Styled.DropdownContainer ref={dropdownRef}>
        <Styled.ToggleButton onClick={handleToggle}>
          {selectedOption || 'Select type'}
        </Styled.ToggleButton>
        <Styled.OptionsList isOpen={isOpen}>
          {options.map((option) => (
            <Styled.OptionItem key={option} onClick={() => handleChange(option as PokemonSkill | '')}>
              {option}
            </Styled.OptionItem>
          ))}
          <Styled.OptionItem key={'all'} onClick={() => handleChange('')}>
            all
          </Styled.OptionItem>
        </Styled.OptionsList>
      </Styled.DropdownContainer>
    </>
  )
}

export default Dropdown