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
                        styles={{ px: '2', py: '1', rounded: 'md', color: "white", bg: 'primary.900' }}
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
                    color={'white'}
                >
                    #xdrkush
                </Button>
                <Button
                    bg={'primary.50'}
                    rounded={'full'}
                    color={'white'}
                >
                    #react
                </Button>
                <Button
                    bg={'primary.50'}
                    rounded={'full'}
                    color={'white'}
                >
                    #typescript
                </Button>
            </Stack>
        </Container>
    );
}
