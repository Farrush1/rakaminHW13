import { Card, Heading, Image, Text, Stack, VStack, HStack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
      <Card key={id} my={5} p={5} cursor="pointer">
        <VStack >
          <Heading size={'lg'}>
            {title} ({year})
          </Heading>
          <Text fontWeight="bold">{author}</Text>
          <Image w={24} h={24} src={`http://localhost:8000/${image}`} />
          <Text>
            <span>Publisher: </span>
            {publisher}
          </Text>
        </VStack>
      </Card>
    </Link>
  );
}
