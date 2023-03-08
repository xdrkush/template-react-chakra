import {
    Box,
    Container,
    Heading,
    Stack,
    Card,
    CardBody,
    Flex,
    Link,
    Image,
    Highlight,
    Text,
    CardFooter,
    useColorModeValue
} from '@chakra-ui/react';

// Replace test data with your own
const features = [
    {
        id: 1,
        title: "Suveillance",
        category: "surveillance",
        data: [
            {
                id: 1,
                title: "surveillance1",
                img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
                description: "Lorem ipsum",
                path: "surveillance1"
            },
            {
                id: 2,
                title: "surveillance2",
                img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
                description: "Lorem ipsum",
                path: "surveillance2"
            },
        ]
    },
    {
        id: 2,
        title: "Paiement",
        category: "paiement",
        data: [
            {
                id: 1,
                title: "paiement1",
                img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
                description: "Lorem ipsum",
                path: "paiement1"
            },
            {
                id: 2,
                title: "paiement2",
                img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
                description: "Lorem ipsum",
                path: "paiement2"
            },
        ]
    },
    {
        id: 3,
        title: "Téléphonie",
        category: "telephonie",
        data: [
            {
                id: 1,
                title: "telephonie1",
                img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
                description: "Lorem ipsum",
                path: "telephonie1"
            },
            {
                id: 2,
                title: "telephonie2",
                img: "https://media.istockphoto.com/id/1387193288/fr/photo/jeune-agent-de-s%C3%A9curit%C3%A9-masculin-adulte-regardant-le-mur-vid%C3%A9o-assis-au-bureau.jpg?s=612x612&w=0&k=20&c=JQ6VOupmip7P4URTTjqsaU3NwfO2bBhPoTC2dyv_Uu8=",
                description: "Lorem ipsum",
                path: "telephonie2"
            },
        ]
    },
]

const CardService = (props: any) => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Box display={"flex"} justifyContent="center">
                    <Image
                        boxSize='50%'
                        src={props.img}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{props.title}</Heading>
                    <Text>
                        {props.description}
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Box w="100%" textAlign="right">
                    <Link
                        p={2}
                        href={`#/services/${props.path}`}
                        fontSize={'md'}
                        fontWeight={500}
                        rounded='md'
                        color={'primary'}
                        _hover={{
                            textDecoration: 'none',
                            color: 'gray.800',
                            bg: 'primary.50'
                        }}>
                        + info
                    </Link>
                </Box>
            </CardFooter>
        </Card>
    )
}

export const ListCardService = () => {
    const colorBG = useColorModeValue('primary.50', 'none');
    const colorTXT = useColorModeValue('gray.800', 'primary.50');
    
    return (
        <Container maxW={'5xl'} py={12}>
            {features.length > 0 && features.map((feature) => {
                return (
                    <Box key={feature.title + feature.id} id={feature.category} py={10}>
                        <Stack textAlign={'left'}>
                            <Heading fontSize={'3xl'}>
                                <Highlight
                                    query={feature.title}
                                    styles={{ px: '2', py: '1', rounded: 'md', bg: colorBG, color: colorTXT }}
                                >
                                    {feature.title}
                                </Highlight>
                            </Heading>
                        </Stack>
                        <Flex display={{ md: "flex" }} justify="center">
                            {feature.data.length > 0 && feature.data.map((el) => (
                                <Box key={'child-' + el.title + feature.id} p="3">
                                    <CardService title={el.title} description={el.description} img={el.img} path={el.path}/>
                                </Box>
                            ))}
                        </Flex>
                    </Box>
                )
            })}
        </Container>
    );
}