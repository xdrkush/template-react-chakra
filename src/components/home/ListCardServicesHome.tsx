import {
    Box,
    Container,
    Heading,
    Stack,
    Flex,
    VStack,
    Button,
    Link,
    Highlight,
    Text,
    useColorModeValue
} from '@chakra-ui/react';

// Replace test data with your own
const features = Array.apply(null, Array(3)).map(function (x, i) {
    return {
        id: i,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
        path: '#/services'
    };
});

export const ListCardServicesHome = () => {
    return (
        <Box id="inprogress">
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>

                    <Highlight
                        query='Lorem Ipsum'
                        styles={{ px: '2', py: '1', rounded: 'md', color: useColorModeValue('gray.800', 'primary.50') }}
                    >
                        Lorem Ipsum
                    </Highlight>
                </Heading>
                <Text color={'gray.600'} fontSize={'xl'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                    sed diam voluptua.
                </Text>
            </Stack>

            <Container maxW={'6xl'} mt={10}>
                <Flex display={{ md: "flex" }} justify="center">

                    {features.map((feature) => (
                        <Box key={feature.id} p='4' w="full">
                            <Flex
                                position="relative"
                                minH="250px"
                                borderRadius="7"
                                backgroundImage={
                                    'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
                                }
                                backgroundSize={'cover'}
                                backgroundPosition={'center center'}>
                                <VStack
                                    borderRadius="7"
                                    justify={'center'}
                                    bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>

                                    <Link
                                        p={2}
                                        href={feature.path}
                                        fontSize={'md'}
                                        fontWeight={500}
                                        _hover={{textDecoration: 'none'}}
                                        color={'primary'}>
                                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} p="3">
                                            <Stack direction={'row'} justify={'left'} w={'full'}>
                                                <Button
                                                    position="absolute"
                                                    top='5'
                                                    bg={'primary.50'}
                                                    color={'gray.800'}
                                                    _hover={{ bg: 'primary.900' }}>
                                                    Category
                                                </Button>
                                            </Stack>
                                            <Box textAlign="left">
                                                <Text
                                                    color={'white'}
                                                    fontWeight={700}
                                                    lineHeight={1.2}
                                                    fontSize={'xl'}>
                                                    Lorem ipsum dolor
                                                </Text>
                                                <Text
                                                    color={'white'}
                                                    fontWeight={500}
                                                    lineHeight={1.2}
                                                    fontSize={'xs'}>
                                                    Lorem ipsum dolor
                                                </Text>
                                            </Box>
                                            <Box textAlign="left">
                                                <Text
                                                    color={'white'}
                                                    fontWeight={700}
                                                    lineHeight={1.2}
                                                    fontSize={'xl'}>
                                                    Lorem ipsum dolor
                                                </Text>
                                                <Text
                                                    color={'white'}
                                                    fontWeight={500}
                                                    lineHeight={1.2}
                                                    fontSize={'xs'}>
                                                    Lorem ipsum dolor
                                                </Text>
                                            </Box>
                                        </Stack>
                                    </Link>
                                </VStack>
                            </Flex>
                        </Box>
                    ))}

                </Flex>
            </Container>
        </Box >
    );
}