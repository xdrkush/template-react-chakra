import {
    Flex,
    VStack,
    Stack,
    Text,
    Button,
    useBreakpointValue,
    Link,
    Highlight
} from '@chakra-ui/react';

export const HeroHome = () => {
    return (
        <Flex
            w={'full'}
            h={'80vh'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    <Text
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        
                        <Highlight
                            query='React & Chakra'
                            styles={{ px: '2', py: '1', rounded: 'md', color: 'primary.50' }}
                        >
                            Welcome with, React & Chakra
                        </Highlight>
                    </Text>
                    <Stack direction={'row'} justify={'center'} w={'full'}>
                        <Button
                            bg={'primary.50'}
                            rounded={'md'}
                            color={'gray.800'}
                            _hover={{ bg: 'whiteAlpha.500' }}>

                            <Link
                                p={2}
                                href={'#/services'}
                                fontSize={'md'}
                                fontWeight={500}
                                color={'primary'}>
                                Services
                            </Link>
                        </Button>
                        <Button
                            bg={'secondary.500'}
                            rounded={'md'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            <Link
                                p={2}
                                href={'#/apropos'}
                                fontSize={'md'}
                                fontWeight={500}
                                color={'primary'}>
                                À propos
                            </Link>
                        </Button>
                    </Stack>
                </Stack>
            </VStack>
        </Flex>
    );
}
