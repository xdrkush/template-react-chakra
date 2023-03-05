import {
    Stack,
    Text,
    Button,
    Container, Heading, Highlight
} from '@chakra-ui/react';

export const InformationService = () => {
    return (
        <Container maxW={'5xl'} py={12}>
            <Stack spacing={4} textAlign="left">
                <Heading>
                    <Highlight
                        query='Lorem Ipsum,'
                        styles={{ px: '2', py: '1', rounded: 'md', color: "gray.900", bg: 'primary.50' }}
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
            </Stack>
            <Stack py={"5"} direction={'row'} justify={'left'} w={'full'}>
                <Button
                    bg={'primary.50'}
                    rounded={'full'}
                    color={'gray.900'}
                >
                    #xdrkush
                </Button>
                <Button
                    bg={'primary.50'}
                    rounded={'full'}
                    color={'gray.900'}
                >
                    #react
                </Button>
                <Button
                    bg={'primary.50'}
                    rounded={'full'}
                    color={'gray.900'}
                >
                    #typescript
                </Button>
            </Stack>
        </Container>
    );
}
