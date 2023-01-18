import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  Grid,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegHospital } from "react-icons/fa";
import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";

const HospitalPage = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <GridItem colSpan={4}>
        <Flex mb={5} alignItems="center">
          <Box
            // h="0px"
            p="2"
            bg={useColorModeValue("white", "gray.900")}
            border="1px"
            mr="2"
            borderColor={useColorModeValue("gray.200", "gray.700")}
            borderRadius="lg"
            boxShadow="lg"
          >
            <FaRegHospital fontSize={30} />
          </Box>
          <Text fontSize="4xl">Health Care Centers</Text>
        </Flex>

        <Flex mb="5">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input placeholder="Search" bg="chakra-body-bg" />
          </InputGroup>
          <Select
            mx="2"
            bg="chakra-body-bg"
            placeholder="Select type"
            maxW="150"
            // onChange={(e) => setType(e.target.value)}
          >
            <option value="referal">All</option>
            <option value="referal">Referal</option>
            <option value="hospital">Hospital</option>
            <option value="clinic">Clinic</option>
            <option value="lab">Laboratory</option>
            <option value="nursing">Nursing</option>
          </Select>
          <Select
            mx="2"
            maxW="150"
            bg="chakra-body-bg"
            placeholder="Sort By"
            // onChange={(e) => setType(e.target.value)}
          >
            <option value="referal">none</option>
            <option value="referal">Name</option>
            <option value="hospital">Address</option>
            <option value="clinic">Users</option>
          </Select>
          <IconButton
            mx="2"
            colorScheme="brand"
            aria-label="Call Segun"
            icon={<EditIcon />}
          />
          <IconButton
            colorScheme="red"
            aria-label="Call Segun"
            icon={<DeleteIcon />}
          />
        </Flex>

        <TableContainer>
          <Table variant="simple" colorScheme="brand">
            <TableCaption>Total healthcare services in Meditopia</TableCaption>
            <Thead>
              <Tr>
                <Th />
                <Th>Health Care Name</Th>
                <Th>Type</Th>
                <Th>Address</Th>
                <Th isNumeric>Users Registered</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>

                <Td>feet</Td>
                <Td>millimetres (mm)</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Td>
                  <Checkbox />
                </Td>

                <Th>To convert</Th>
                <Th>into</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </GridItem>
      <GridItem colSpan={2} position="sticky" top={70}>
        <Card bg="chakra-body-bg" boxShadow="xl">
          <CardBody>
            <Text fontSize="md" color="gray.500" mb="2">
              Basic Information
            </Text>

            <FormControl>
              <Input
                placeholder="Name of the center"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Address of the center"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <Select
                value={type}
                placeholder="Select type of center"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="referal">Referal Hospital</option>
                <option value="hospital">Hospital</option>
                <option value="clinic">Clinic</option>
                <option value="lab">Laboratory</option>
                <option value="nursing">Nursing Home</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <Flex mt={4} justifyContent="flex-end">
              <Button disabled={isLoading} variant="ghost" mr={3}>
                Cancel
              </Button>
              <Button
                colorScheme="brand"
                isLoading={isLoading}
                // onClick={handleOnAdd}
              >
                Edit
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default HospitalPage;