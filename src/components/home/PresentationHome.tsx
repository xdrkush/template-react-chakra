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
    Link
} from '@chakra-ui/react';

export const PresentationHome = () => {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack textAlign="left">
                    <Heading>
                        <Highlight
                            query='Lorem Ipsum,'
                            styles={{ px: '2', py: '1', rounded: 'md', color: "gray.800", bg: 'primary.50' }}
                        >
                            Lorem Ipsum, A digital Product design agency
                        </Highlight>
                    </Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore
                    </Text>
                    <Box w="100%" textAlign="right">
                        <Link
                            p={2}
                            href={'#/apropos'}
                            fontSize={'md'}
                            fontWeight={500}
                            rounded="md"
                            color={'primary'}
                            _hover={{
                                textDecoration: 'none',
                                color: 'gray.800',
                                bg: 'primary.50'
                            }}>
                            + info
                        </Link>
                    </Box>
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