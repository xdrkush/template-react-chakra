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
                'url(https://i.pinimg.com/originals/9e/0e/dc/9e0edc3bf5589b737487f5680e2e9a46.gif)'
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}>
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                    {/* Insert here */}
                </Stack>
            </VStack>
        </Flex>
    );
}
