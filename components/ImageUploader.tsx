import React, { useState, ChangeEvent, useRef } from "react";
import { Box, Image, Input, Text } from "@chakra-ui/react";
import { MdImage } from "react-icons/md";

const ImageUploader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Box 
      position="relative"
      borderRadius="full"
      boxSize="150px"
      overflow="hidden"
      className="flex flex-col items-center justify-center"
      borderWidth='2px'
    >
      <Input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        display="none"
        id="image-input"
        ref={fileInputRef}
      />
      <Image
        src={selectedImage ?? "/images/landing.png"}
        alt="Project Image"
        objectFit="cover"
        boxSize={150}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="black"
        opacity={0}
        cursor="pointer"
        _hover={{
          opacity: 0.8
        }}
        onClick={handleImageClick}
      >
        <Text
          color="white"
          fontSize="lg"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
        >
          Select Image
        </Text>
      </Box>
    </Box>
  );
};

export default ImageUploader;
