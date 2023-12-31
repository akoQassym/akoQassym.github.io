import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [hasMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!hasMounted) return false;

  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
      bg={'black'}
      zIndex={100}
    >
      <Image src="logo.svg" alt="Aknur" boxSize="50px" />
      <Box
        height="24px"
        position="relative"
        as="button"
        role="button"
        textTransform="uppercase"
        px={3}
        color="white"
        borderRadius="lg"
        bg="blue.500"
        fontSize="sm"
        fontWeight="semibold"
        transition="0.1s"
        _hover={{ bg: 'blue.700' }}
      >
        <Box as="span" position="relative" zIndex={10}>
          <Link href="https://t.me/ako_q" isExternal>
            Message me on Telegram
          </Link>
        </Box>
      </Box>
    </Flex>
  );
};
