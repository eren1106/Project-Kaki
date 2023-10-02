import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props {
  isOpen: boolean;
  onAction: VoidFunction;
  onClose: VoidFunction;
  title: string;
  actionBtnText?: string;
  size?: string;
  children: ReactNode;
}

const CustomModal = ({
  isOpen,
  onAction,
  onClose,
  title,
  actionBtnText = "Save",
  size = "xl",
  children
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={size}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {children}
        </ModalBody>

        <ModalFooter>
          <Button onClick={onAction} mr={3} className='bg-blue-3 hover:bg-blue-2 text-white'>
            {actionBtnText}
          </Button>
          <Button onClick={onClose} className='bg-blue-1'>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default CustomModal