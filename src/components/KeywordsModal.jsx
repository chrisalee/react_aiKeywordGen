/* eslint-disable react/prop-types */
import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress,
  } from '@chakra-ui/react';

const KeywordsModal = ({ isOpen, closeModal, loading, keywords }) => {
  return (
    <>
        <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalOverlay />
            <ModalContent bg='gray.900'>
                <ModalHeader color="white">Keywords</ModalHeader>
                <ModalCloseButton color='#fff' _hover={{color: 'white'}}/>
                <ModalBody display="flex" alignItems="center" justifyContent="center">
                    {loading ? (
                        <CircularProgress isIndeterminate color='blue.300' />
                    ) : (
                        <Text color="white">{keywords}</Text>
                    )}
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={closeModal}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
  )
}

export default KeywordsModal