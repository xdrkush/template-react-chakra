import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Box,
    Stack,
    Highlight,
    Link,
    Button
} from '@chakra-ui/react';

export const PresentationServices = () => {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4} textAlign="left">
                    <Heading>
                        <Highlight
                            query='Lorem Ipsum,'
                            styles={{ px: '2', py: '1', rounded: 'md', color: "gray.800", bg: 'primary.50' }}
                        >
                            Nos services, proposer par nos experts.
                        </Highlight>
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Nous sommes experts dans nos domaines et faisons profités à tous nos clients,
                    </Text>
                    {/* <Box w="100%" textAlign="right">
                        <Stack direction={'row'} justify={'left'} w={'full'}>
                            <Button
                                bg={'primary.50'}
                                color={'gray.800'}
                                _hover={{ bg: 'primary.900' }}>

                                <Link
                                    p={2}
                                    href={'#/apropos'}
                                    fontSize={'md'}
                                    fontWeight={500}
                                    color={'primary'}
                                    _hover={{ bg: 'primary.900' }}>
                                    + info
                                </Link>
                            </Button>
                        </Stack>
                    </Box> */}
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}