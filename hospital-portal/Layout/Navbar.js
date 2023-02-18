import {
  Flex,
  Box,
  Image,
  Button,
  Container,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  useColorMode,
  Avatar,
  Icon,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { MdOutlineSick } from "react-icons/md";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useAuth } from "../context/AuthContext";
import PatientForm from "../components/common/patientForm";
import AddRecords from "../components/modals/AddRecordModal";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { user, logout } = useAuth();
  const {
    isOpen: isForm,
    onOpen: openForm,
    onClose: closeForm,
  } = useDisclosure();

  return (
    <Box
      bgGradient="linear(to-r, blue.500, blue.400)"
      // bg={useColorModeValue("brand.400", "gray.800")}
      position="fixed"
      width="100%"
      zIndex={2}
      py={1}
    >
      <Container maxW="8xl">
        <Flex h={12} justifyContent="space-between" alignItems="center" px={3}>
          <Flex>
            <Image src="logo.png" width="40px" />
            <Box ml={2}>
              <Text
                fontSize="1xl"
                as="b"
                textTransform="uppercase"
                color="white"
              >
                Meditopia H. Portal
              </Text>
              <Text fontSize="xs" color="white">
                {user.displayName}
              </Text>
            </Box>
          </Flex>
          <Flex alignItems="center" gap={4} width={450}>
            <Button
              leftIcon={<MdOutlineSick />}
              bg="white"
              color="brand.400"
              size={"sm"}
              variant="solid"
              onClick={openForm}
            >
              Add Patient
            </Button>

            <Modal isOpen={isForm} onClose={closeForm}>
              <ModalOverlay />
              <ModalContent>
                <PatientForm />
              </ModalContent>
            </Modal>

            <AddRecords />

            <Icon boxSize={6} onClick={toggleColorMode} cursor="pointer" mx="2">
              {colorMode === "light" ? <MoonIcon color="white" /> : <SunIcon />}
            </Icon>
            <Menu>
              <MenuButton>
                <Avatar size={"sm"} />
              </MenuButton>

              <MenuList
                display="flex"
                flexDirection="column"
                alignItems={"center"}
              >
                <Box>
                  <Image src={user?.photoURL} width="200px" />
                  <Divider />
                </Box>

                <MenuItem icon={<IoMdSettings />}>Settings</MenuItem>
                <MenuItem icon={<IoMdLogOut />} onClick={logout}>
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
