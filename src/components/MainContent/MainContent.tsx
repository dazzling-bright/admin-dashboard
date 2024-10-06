import {
  Flex,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Avatar,
} from "@chakra-ui/react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import tableData from "../../data/tableData";
import { useState } from "react";

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Function to highlight matched text
  const highlightText = (text: string, highlight: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span
              key={index}
              style={{
                backgroundColor: "yellow",
                color: "#111827",
                fontWeight: "bold",
              }}
            >
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Filtered table data based on search term
  const filteredData = tableData.filter(
    (item) =>
      // Filtering by name, email
      item.name.toLowerCase().includes(searchTerm) ||
      item.email.toLowerCase().includes(searchTerm)
  );

  return (
    <Box gridArea="main" bg="#F3F4F6">
      <Flex
        justifyContent={"space-between"}
        px={12}
        h="70px"
        alignItems="center"
        borderBottom="1px solid #D1D7DE"
      >
        <Text fontSize="lg" fontWeight="500" px={4}>
          Subscriptions
        </Text>
        <Button bg="#FF8800" color="white" _hover={{ bg: "#ff6f00" }}>
          New Plans
        </Button>
      </Flex>

      {/* Tabs for Overview and Plans */}
      <Flex fontSize={20} gap={10} px={12} borderBottom="1px solid #D1D7DE">
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => setActiveTab("Overview")}
        >
          <Text
            p={4}
            borderBottom="3px solid transparent"
            borderBottomColor={
              activeTab === "Overview" ? "#0687FC" : "transparent"
            }
            transition="border-color 0.3s ease"
          >
            Overview
          </Text>
          <Box
            width="6px"
            height="6px"
            backgroundColor={activeTab === "Overview" ? "red" : "transparent"}
            borderRadius="full"
            transition="background-color 0.3s ease"
          />
        </Flex>

        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => setActiveTab("Plans")}
        >
          <Text
            p={4}
            borderBottom="3px solid transparent"
            borderBottomColor={
              activeTab === "Plans" ? "#0687FC" : "transparent"
            }
            transition="border-color 0.3s ease"
          >
            Plans
          </Text>
          <Box
            width="6px"
            height="6px"
            backgroundColor={activeTab === "Plans" ? "red" : "transparent"}
            borderRadius="full"
            transition="background-color 0.3s ease"
          />
        </Flex>
      </Flex>

      {/* Table */}
      <Box
        mt={6}
        mx={12}
        mb={8}
        borderRadius="2xl"
        boxShadow="md"
        border="2px solid #D1D7DE"
        color="#333"
      >
        <Box p={4} px={8}>
          {/* Search Bar */}
          <InputGroup width="40%">
            <InputLeftElement>
              <SearchIcon color="#6B7280" cursor={"pointer"} />
            </InputLeftElement>
            <Input
              placeholder="Search"
              size="md"
              variant="outline"
              borderColor="#D1D7DE"
              color="#6B7280"
              _placeholder={{ color: "#6B7280", fontWeight: "600" }}
              _focus={{
                borderColor: "#D1D7DE",
                boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.3)",
                backgroundColor: "whiteAlpha.700",
                transition:
                  "boxShadow 0.3s ease, background-color 0.3s ease-in-out",
              }}
              _hover={{
                boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
                backgroundColor: "whiteAlpha.700",
                transition:
                  "boxShadow 0.3s ease, background-color 0.3s ease-in-out",
              }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </InputGroup>
        </Box>

        <Table variant="simple" mt={4} color="#6B7280" p={4} px={8}>
          <Thead textAlign="left" bg="#e5e7eb">
            <Tr>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Phone Number</Th>
              <Th>Date Joined</Th>
              <Th>Plan</Th>
              <Th>Next Billing</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* Render filtered data */}
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <Tr key={index}>
                  <Td
                    color="#111827"
                    fontWeight="600"
                    borderColor="#D1D7DE"
                    borderStyle="solid"
                    borderWidth="1px 0"
                  >
                    <Flex alignItems="flex-start">
                      <Avatar name={item.name} size="sm" mr={2} />
                      <Box>
                        <Text mb={2}>
                          {highlightText(item.name, searchTerm)}
                        </Text>
                        <Text fontSize="sm" color="#8F8F8F">
                          {highlightText(item.email, searchTerm)}
                        </Text>
                      </Box>
                    </Flex>
                  </Td>

                  <Td
                    color="#111827"
                    fontWeight="600"
                    borderColor="#D1D7DE"
                    borderStyle="solid"
                    borderWidth="1px 0"
                  >
                    <Flex direction="column" alignItems="flex-start">
                      <Text mb={2}>{item.title}</Text>
                      <Text fontSize="sm" color="#8F8F8F">
                        {item.companyName}
                      </Text>
                    </Flex>
                  </Td>

                  <Td
                    color="#111827"
                    fontWeight="600"
                    borderColor="#D1D7DE"
                    borderStyle="solid"
                    borderWidth="1px 0"
                    bg="#F3F4F6"
                  >
                    <Text
                      borderRadius="2xl"
                      bg="#E5E7EB"
                      p="1"
                      maxW="fit-content"
                    >
                      {item.phoneNumber}
                    </Text>
                  </Td>
                  <Td
                    borderColor="#D1D7DE"
                    borderStyle="solid"
                    borderWidth="1px 0"
                  >
                    {item.dateJoined}
                  </Td>
                  <Td
                    borderColor="#D1D7DE"
                    borderStyle="solid"
                    borderWidth="1px 0"
                  >
                    {item.plan}
                  </Td>
                  <Td
                    borderColor="#D1D7DE"
                    borderStyle="solid"
                    borderWidth="1px 0"
                  >
                    {item.nextBilling}
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={6} textAlign="center" py={6}>
                  No results found.
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default MainContent;
