import * as React from 'react'
import * as Styled from './index.style'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const dialogRef = React.useRef<HTMLDialogElement>(null)

  const handleOutsideClick = (event: React.MouseEvent<HTMLElement>) => {
    if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <Styled.ModalOverlay onClick={handleOutsideClick}>
          <Styled.ModalDialog ref={dialogRef} open>
            <Styled.ModalCloseButtonWrapper>
              <Styled.ModalCloseButton onClick={onClose}>
                Close
              </Styled.ModalCloseButton>
            </Styled.ModalCloseButtonWrapper>
            <Styled.ChildrenWrapper>
              {children}
            </Styled.ChildrenWrapper>
          </Styled.ModalDialog>
        </Styled.ModalOverlay>
      )}
    </>
  )
}

export default Modal