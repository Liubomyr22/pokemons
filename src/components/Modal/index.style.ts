import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalDialog = styled.dialog`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
`

export const ModalCloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalCloseButton = styled.button`
  display: flex;
  padding: 5px 10px;
  background-color: #fff;
  border: none;
  cursor: pointer;
  border: 1px solid #000000;

`

export const ChildrenWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    width: 50vw;
  }

  @media screen and (max-width: 700px) {
    width: 60vw;
  }

  @media screen and (max-width: 500px) {
    width: 70vw;
  }
`