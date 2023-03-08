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
const features = [
    {
        id: 1,
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
        img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
        path: '#/services',
        data: [
            { id: 1, title: "Subtitle11" },
            { id: 2, title: "Subtitle12" },
        ]
    },
    {
        id: 2,
        title: 'Title 2',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
        img: "https://media.istockphoto.com/id/1414744533/fr/photo/femme-tenant-la-main-des-cartes-de-cr%C3%A9dit-et-utilisant-un-smartphone-pour-faire-des-achats-en.jpg?s=612x612&w=0&k=20&c=4uc_oplvVvc7rqQ4lO2rtKZmSpf9oVjzikqYtTz_Llk=",
        path: '#/services',
        data: [
            { id: 1, title: "Subtitle21" },
            { id: 2, title: "Subtitle22" },
        ]
    },
    {
        id: 3,
        title: 'Title 3',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
        img: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        path: '#/services',
        data: [
            { id: 1, title: "Subtitle31" },
            { id: 2, title: "Subtitle32" },
        ]
    },
]


export const ListCardServicesHome = () => {
    return (
        <Box id="inprogress">
            <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
                <Heading fontSize={'3xl'}>

                    <Highlight
                        query='Nos Services'
                        styles={{ px: '2', py: '1', rounded: 'md', color: useColorModeValue('gray.800', 'primary.50') }}
                    >
                        Nos Services
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
                                    `url(${feature.img})`
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
                                        _hover={{ textDecoration: 'none' }}
                                        color={'primary'}>
                                        <Stack maxW={'2xl'} align={'flex-start'} spacing={6} p="3">
                                            <Stack direction={'row'} justify={'left'} w={'full'}>
                                                <Button
                                                    position="absolute"
                                                    top='5'
                                                    bg={'primary.50'}
                                                    color={'gray.800'}
                                                    _hover={{ bg: 'primary.900' }}>
                                                    {feature?.title}
                                                </Button>
                                            </Stack>
                                            {feature?.data.length > 0 && feature.data.map((el: any) => {
                                                return (
                                                    <Box key={el.id} textAlign="left">
                                                        <Text
                                                            color={'white'}
                                                            fontWeight={700}
                                                            lineHeight={1.2}
                                                            fontSize={'xl'}>
                                                            {el.title}
                                                        </Text>
                                                    </Box>

                                                )
                                            })

                                            }
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