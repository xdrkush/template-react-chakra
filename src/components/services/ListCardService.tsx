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
const features = Array.apply(null, Array(3)).map(function (x, i) {
    return {
        id: i,
        title: 'Lorem ipsum dolor sit amet',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.',
    };
});

const CardService = () => {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Box display={"flex"} justifyContent="center">
                    <Image
                        boxSize='50%'
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                </Box>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces.
                    </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <Box w="100%" textAlign="right">
                    <Link
                        p={2}
                        href={'#/services/myservice'}
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
    return (
        <Container maxW={'5xl'} py={12}>
            <Box id="dev" py={10}>
                <Stack textAlign={'left'}>
                    <Heading fontSize={'3xl'}>
                        <Highlight
                            query='Dev'
                            styles={{ px: '2', py: '1', rounded: 'md', bg: useColorModeValue('primary.50', 'none'),color: useColorModeValue('gray.800', 'primary.50') }}
                        >
                            Other Dev
                        </Highlight>
                    </Heading>
                </Stack>
                <Flex display={{ md: "flex" }} justify="center">
                    {features.map((feature) => (
                        <Box key={feature.id} p="3">
                            <CardService />
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box id="devweb" py={10}>
                <Stack textAlign={'left'}>
                    <Heading fontSize={'3xl'}>
                        <Highlight
                            query='Dev Web'
                            styles={{ px: '2', py: '1', rounded: 'md', bg: useColorModeValue('primary.50', 'none'),color: useColorModeValue('gray.800', 'primary.50') }}
                        >
                            Other Dev Web
                        </Highlight>
                    </Heading>
                </Stack>
                <Flex display={{ md: "flex" }} justify="center">
                    {features.map((feature) => (
                        <Box key={feature.id} p="3">
                            <CardService />
                        </Box>
                    ))}

                </Flex>
            </Box>
            <Box id="htmltoweb3" py={10}>
                <Stack textAlign={'left'}>
                    <Heading fontSize={'3xl'}>
                        <Highlight
                            query='Web3'
                            styles={{ px: '2', py: '1', rounded: 'md', bg: useColorModeValue('primary.50', 'none'),color: useColorModeValue('gray.800', 'primary.50') }}
                        >
                            Other Web3
                        </Highlight>
                    </Heading>
                </Stack>
                <Flex display={{ md: "flex" }} justify="center">
                    {features.map((feature) => (
                        <Box key={feature.id} p="3">
                            <CardService />
                        </Box>
                    ))}

                </Flex>
            </Box>
        </Container>
    );
}