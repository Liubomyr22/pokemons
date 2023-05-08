import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: flex;
`

export const ToggleButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  cursor: pointer;
  width: 135px;
  border-radius: 10px;

  @media screen and (max-width: 450px) {
    padding: 8px 4px;
    width: 100px;
    font-size: 12px;
  }
`

export const OptionsList = styled.ul<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: -50%;
  z-index: 2;
  padding: 0;
  margin: 4px 0 0;
  list-style: none;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`

export const OptionItem = styled.li`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  width: 90px;

  &:hover {
    background-color: #f0f0f0;
    border-radius: 10px;
  }
`