import { useState } from 'react';
import { Box, Button, VStack, HStack } from '@chakra-ui/react';
import { FaLocationArrow } from 'react-icons/fa';
import ErrorComp from './ErrorComp';

const CustomerCare = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseText, setResponseText] = useState('');

  const API_TOKEN = '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';

  const query = async (data) => {
    try {
      const response = await fetch(
        'https://api-inference.huggingface.co/models/google/gemma-2b-it',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error querying the API:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    try {
        const maskedInputValue = ` ${inputValue}`;
        const response = await query({ inputs: maskedInputValue });
        setResponseText(JSON.stringify(response[0]['generated_text']));
    } catch (error) {
      <ErrorComp/>;
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Box h="100vh" w="full" backgroundColor="#1A202C">
      <Box
        margin="0 auto"
        maxH="50vh"
        border="1px solid white"
        borderRadius="10px"
        w="80%"
        color="white"
      >
        {responseText || 'Hello'}
      </Box>
      <VStack h="80vh" w="100%" justifyContent="flex-end">
        <HStack w="100%">
          <input
            style={{
              borderRadius: '10px',
              marginLeft: '1rem',
              color: 'black',
              width: '90%',
              height: '50px',
              border: '1px solid #1A202C',
            }}
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button type="submit" p="1rem" onClick={handleSubmit}>
            <FaLocationArrow />
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CustomerCare;
