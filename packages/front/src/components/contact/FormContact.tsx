import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Spacer,
    InputLeftElement,
    Textarea,
    Grid,
    Link,
    useColorModeValue,
    Stack
} from '@chakra-ui/react';
import { BsPerson } from 'react-icons/bs';
import axios from 'axios';
import { useState } from 'react';

export const FormContact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = () => {
        console.log('sendMail', { name, email, subject, message })
        // axios.post("/api/mail", { name, email, subject, message })
    }

    return (
        <Container maxW="full" mt={10} centerContent overflow="hidden">
            <Flex>
                <Box
                    minW="50vw"
                    bg={useColorModeValue('gray.50', 'gray.900')} borderRadius="lg">
                    <Box m={8}>

                        <Box>
                            <Heading>Contactez-nous</Heading>
                            <Text my={{ sm: 3, md: 3, lg: 5 }}>
                                Nous vous répondrons dès que possible
                            </Text>
                        </Box>

                        <VStack>
                            <FormControl id="name">
                                <FormLabel>Votre Nom</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input isRequired type="text" size="md" onChange={(e) => setName(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            <Spacer />
                            <FormControl id="email">
                                <FormLabel>Votre email</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input isRequired type="text" size="md" onChange={(e) => setEmail(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="subject">
                                <FormLabel>Sujet de votre demande:</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input isRequired type="text" size="md" onChange={(e) => setSubject(e.target.value)} />
                                </InputGroup>
                            </FormControl>
                            <FormControl id="message">
                                <FormLabel>Message de votre demande:</FormLabel>
                                <Textarea isRequired
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    placeholder="message"
                                    onChange={(e) => setMessage(e.target.value)} />
                            </FormControl>
                            <FormControl id="name" float="right">
                                <Button
                                    onClick={sendMail}
                                    w="full"
                                    variant="solid"
                                    bg="primary.50"
                                    color='gray.900'
                                    _hover={{ bg: useColorModeValue('gray.500', 'gray.50') }}>
                                    Envoyer votre message
                                </Button>
                            </FormControl>
                        </VStack>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}