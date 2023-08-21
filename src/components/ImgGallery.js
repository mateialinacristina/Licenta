import React, { useState } from 'react';
import {
  Box,
  Image,
  Center,
  ButtonGroup,
  Button,
  HStack,
} from '@chakra-ui/react';

const ImgGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
      // Add your images URLs here...
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80',
      'https://images.unsplash.com/photo-1691751579305-cfaee3b8ec2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      // ... and so on
    ];
  
    const handleNext = () => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };
  
    const handlePrevious = () => {
      setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
    };
  
    const handleDotClick = (index) => {
      setCurrentImage(index);
    };
  
    return (
        <Center flexDirection="column">
          {/* Display Current Image */}
          <Image
            src={images[currentImage]}
            alt="Carousel Image"
            boxSize={{ base: "250px", sm: "350px", md: "450px", lg: "500px", xl: "550px" }}
            mb={4}
          />
    
          {/* Carousel Navigation */}
          <ButtonGroup size={{ base: "md", lg: "sm" }} isAttached variant="outline">
            <Button onClick={handlePrevious}>&lt;</Button>
            <Button onClick={handleNext}>&gt;</Button>
          </ButtonGroup>
    
          {/* Carousel Dots */}
          <HStack spacing={2} mt={2}>
            {images.map((_, index) => (
              <Box
                as="button"
                key={index}
                w={{ base: "10px", lg: "8px" }}
                h={{ base: "10px", lg: "8px" }}
                borderRadius="50%"
                bgColor={currentImage === index ? 'blue.500' : 'gray.300'}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </HStack>
        </Center>
      );
  };
  
  export default ImgGallery;
