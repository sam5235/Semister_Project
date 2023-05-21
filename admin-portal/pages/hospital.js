import { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaRegHospital } from "react-icons/fa";
import { DeleteIcon, EditIcon, SearchIcon } from "@chakra-ui/icons";
import { getHealthCareCenters } from "../firebase/healthServices";
import AddHealthcare from "../components/forms/AddHealthcare";

const HospitalPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedSort, setSelectedSort] = useState("none");
  const [healthCenters, setHealthCenters] = useState([]);
  const [isTableLoading, setIsTableLoading] = useState(true);

  const fetchHealthcares = async () => {
    const healthCenters = await getHealthCareCenters();
    setHealthCenters(healthCenters);
    setIsTableLoading(false);
  };

  const sorrtedHealthcares = healthCenters.slice().sort((a, b) => {
    if (!selectedSort || selectedSort === "none") {
      return 0;
    }
    return a[selectedSort].localeCompare(b[selectedSort]);
  });

  const lists =
    !selectedSort || selectedSort === "none"
      ? healthCenters
      : sorrtedHealthcares;

  const filteredCenters = lists.filter(
    (h) =>
      h.name.toLowerCase().includes(searchInput.toLowerCase()) &&
      (selectedType === "all" || h.type === selectedType)
  );

  useEffect(() => {
    fetchHealthcares();
  }, []);

  return (
    <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
    >
      <GridItem colSpan={4}>
        <Flex mb={5} alignItems="center">
          <Box
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
          <Text fontSize="4xl">Registered Healthcares</Text>
        </Flex>

        <Flex mb="5">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              bg="chakra-body-bg"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </InputGroup>
          <Select
            mx="2"
            bg="chakra-body-bg"
            placeholder="Select type"
            maxW="150"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All</option>
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
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            <option value="none">None</option>
            <option value="name">Name</option>
            <option value="address">Address</option>
            <option value="type">Type</option>
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
        {isTableLoading && (
          <Flex w="full" justifyContent="center">
            <Spinner />
          </Flex>
        )}
        {!isTableLoading && (
          <TableContainer>
            <Table variant="simple" colorScheme="brand">
              <TableCaption>
                Total healthcare services in Meditopia
              </TableCaption>
              <Thead>
                <Tr>
                  <Th />
                  <Th>Health Care Name</Th>
                  <Th>Type</Th>
                  <Th>Address</Th>
                </Tr>
              </Thead>
              <Tbody w="full">
                {filteredCenters.map((center) => {
                  return (
                    <Tr key={center.id}>
                      <Td>
                        <Checkbox />
                      </Td>
                      <Td>{center.name}</Td>
                      <Td>{center.type}</Td>
                      <Td>{center.address}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </GridItem>
      <GridItem colSpan={2} position="sticky" top={70}>
        <Card bg="chakra-body-bg" boxShadow="xl">
          <CardBody>
            <AddHealthcare />
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};

export default HospitalPage;
