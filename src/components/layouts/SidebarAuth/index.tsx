import { useEffect } from 'react';
import {
    IconButton,
    Box,
    Flex,
    Icon,
    Link,
    Drawer,
    DrawerContent,
    Text, DrawerOverlay,
    BoxProps,
    FlexProps,
} from '@chakra-ui/react';
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
} from 'react-icons/fi';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { ReactText } from 'react';
import { IconType } from 'react-icons';

interface LinkItemProps {
    name: string;
    path: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Profile', path: "#/profile", icon: FiHome },
    { name: 'Stat', path: "#/profile/stat", icon: FiTrendingUp },
    { name: 'Vote', path: "#/profile/vote", icon: FiCompass }
];

export const SidebarAuth = ({ isOpen, onOpen, onClose, children }: any) => {
    
    return (
        <>
            {/* Choose that */}
            {/* <SidebarContent
                onClose={onClose}
                onOpen={onOpen}
                isOpen={isOpen}
                display={{ base: 'none', md: 'block' }}
            /> */}
            {/* or that */}
            <Drawer
                variant="secondary"
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                autoFocus={false}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <SidebarContent
                        onClose={onClose}
                        onOpen={onOpen}
                        isOpen={isOpen}
                    />
                </DrawerContent>
            </Drawer>

            {/* For re-ajust body */}
            <Box ml={isOpen ? '0' : '0' } p="4">
                {children}
            </Box>
        </>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
    onOpen: () => void;
    isOpen: boolean;
}

const SidebarContent = ({ onClose, isOpen, onOpen, ...rest }: SidebarProps) => {
    return (
        <Box
            pos="fixed"
            {...rest}>
            <Flex h="20" w="90%" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    DrKush
                </Text>
                <IconButton
                    onClick={isOpen ? onClose : onOpen}
                    icon={
                        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                {/* <CloseButton display={{ base: 'flex', md: 'flex' }} onClick={onClose} /> */}
            </Flex>

            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} path={link.path}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    path: string;
    children: ReactText;
}

const NavItem = ({ icon, children, path, ...rest }: NavItemProps) => {
    return (
        <Link href={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'cyan.400',
                    color: 'white',
                }}
                {...rest} >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
