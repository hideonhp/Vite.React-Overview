import "react-slideshow-image/dist/styles.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Slide } from "react-slideshow-image";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";

export function ImageSlider({ imageList }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderImages = () => {
    return imageList.map((imageLink, i) => (
      <Image
        onClick={() => openModalSlider(i)}
        src={imageLink}
        boxShadow="xl"
        borderRadius="xl"
        key={imageLink}
      />
    ));
  };

  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={true}
      arrows={imageList.length > 1}
      autoplay={false}
    >
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      bg="transparent"
      size="6xl"
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    >
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow={"none"}>
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <Box w={300}>{slider}</Box>
      {modalSlider}
    </>
  );
}

ImageSlider.propTypes = {
  imageList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
