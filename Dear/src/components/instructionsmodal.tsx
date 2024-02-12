
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure} from "@nextui-org/react";

const InstructionsModal: React.FC<{}> = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
        <Button onPress={onOpen} color="success" className="text-white">Instructions</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="bg-slate-700 text-white flex flex-col gap-1">Instructions</ModalHeader>
                <ModalBody className="bg-slate-700 text-white pb-4">
                  <p>Choose (by ticking the respective box) 1 or 2 from the top row and any you'd like from the bottom row.</p>
                  <p>Send a screenshot of your response to me on Snapchat.</p>
                  <p>Be ready at 9am on Wednesday.</p>
                  <p>Things to bring: yourself and gratitude</p>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}

export default InstructionsModal;