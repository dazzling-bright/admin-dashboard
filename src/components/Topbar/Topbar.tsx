import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Topbar = () => {
  return (
    <Box
      gridArea="topbar"
      border="2px solid transparent"
      borderBottomColor="border"
      bg="background.light"
      px={12}
      py={6}
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
    >
      <InputGroup width="40%">
        <InputLeftElement>
          <SearchIcon
            color="text.light"
            cursor="pointer"
            _hover={{
              color: "text.dark",
              transition: "color 0.3s ease-in-out",
            }}
          />
        </InputLeftElement>
        <Input
          placeholder="Search"
          size="md"
          variant="outline"
          borderColor="border"
          color="text.light"
          borderRadius="lg"
          _placeholder={{ color: "text.light", fontWeight: "600" }}
          _focus={{
            borderColor: "border",
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.3)",
            backgroundColor: "whiteAlpha.700",
            transition:
              "box-shadow 0.3s ease, background-color 0.3s ease-in-out",
          }}
          _hover={{
            boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)",
            backgroundColor: "whiteAlpha.700",
            transition:
              "box-shadow 0.3s ease, background-color 0.3s ease-in-out",
          }}
        />
      </InputGroup>
    </Box>
  );
};

export default Topbar;
