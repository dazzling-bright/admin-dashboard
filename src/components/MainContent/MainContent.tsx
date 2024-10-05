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

  return (
    <Box bg="#F3F4F6" px={12} gridArea="main">
      <Flex justifyContent={"space-between"}>
        <Text mt={4} fontSize={24} fontWeight="500">
          Subscriptions
        </Text>
        <Button mt={4} bg="#FF8800" color="white" _hover={{ bg: "#ff6f00" }}>
          New Plans
        </Button>
      </Flex>

      {/* Tabs for Overview and Plans */}
      <Flex fontSize={20} gap={10}>
        {/* Overview Tab */}
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => setActiveTab("Overview")}
        >
          <Text
            mt={4}
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

        {/* Plans Tab */}
        <Flex
          alignItems="center"
          cursor="pointer"
          onClick={() => setActiveTab("Plans")}
        >
          <Text
            mt={4}
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
        borderRadius="md"
        boxShadow="md"
        border="2px solid #8F8F8F"
        color="#333"
      >
        <Box p={4} px={8}>
          <InputGroup width="50%">
            <InputLeftElement>
              <SearchIcon color="#8F8F8F" cursor={"pointer"} />
            </InputLeftElement>
            <Input
              placeholder="Search..."
              size="md"
              variant="outline"
              borderColor="#8F8F8F"
              color="#8F8F8F"
              _placeholder={{ color: "#8F8F8F" }}
              _focus={{ borderColor: "#8F8F8F", boxShadow: "none" }}
              _hover={{
                boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
                bg: "whiteAlpha.100",
                transition:
                  "boxShadow 0.3s ease, background-color 0.3s ease-in-out",
              }}
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
            {tableData.map((item, index) => (
              <Tr key={index}>
                <Td
                  color="#111827"
                  fontWeight="600"
                  borderColor="#8F8F8F"
                  borderStyle="solid"
                  borderWidth="1px 0"
                >
                  <Flex alignItems="flex-start">
                    <Avatar name={item.name} size="sm" mr={2} />
                    <Box>
                      <Text mb={2}>{item.name}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {item.email}
                      </Text>
                    </Box>
                  </Flex>
                </Td>

                <Td
                  color="#111827"
                  fontWeight="600"
                  borderColor="#8F8F8F"
                  borderStyle="solid"
                  borderWidth="1px 0"
                >
                  <Flex direction="column" alignItems="flex-start">
                    <Text mb={2}>{item.title}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {item.companyName}
                    </Text>
                  </Flex>
                </Td>

                <Td
                  color="#111827"
                  fontWeight="600"
                  borderColor="#8F8F8F"
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
                  borderColor="#8F8F8F"
                  borderStyle="solid"
                  borderWidth="1px 0"
                >
                  {item.dateJoined}
                </Td>
                <Td
                  borderColor="#8F8F8F"
                  borderStyle="solid"
                  borderWidth="1px 0"
                >
                  {item.plan}
                </Td>
                <Td
                  borderColor="#8F8F8F"
                  borderStyle="solid"
                  borderWidth="1px 0"
                >
                  {item.nextBilling}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default MainContent;
