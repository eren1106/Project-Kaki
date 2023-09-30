import { useState } from 'react';
import { Input, Tag, TagCloseButton, TagLabel, Box, Flex } from '@chakra-ui/react';

const TagInput: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState<string>('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && currentTag && tags.length < 5) {
      setTags([...tags, currentTag]);
      setCurrentTag('');
    }
  };

  const handleTagRemove = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <Box>
      <Flex flexWrap="wrap">
        {tags.map(tag => (
          <Tag key={tag} m={1} size="md" className='bg-blue-1'>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => handleTagRemove(tag)} />
          </Tag>
        ))}
      </Flex>
      <Input
        placeholder={tags.length < 5 ? 'Enter tags and press Enter' : 'Maximum 5 tags allowed'}
        value={currentTag}
        onChange={(e) => setCurrentTag(e.target.value)}
        onKeyDown={handleKeyDown}
        className='bg-white border-gray-300'
      />
    </Box>
  );
};

export default TagInput;
