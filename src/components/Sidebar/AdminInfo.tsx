import { Box, Text } from "@chakra-ui/react";

const AdminInfo = () => {
  return (
    <Box borderTop="2px solid #8F8F8F" pt={4} mt={6} textAlign="center">
      <Text mb={2} fontWeight="bold">
        Vincent Rice
      </Text>
      <Text mb={4}>vincent.rice@wew.com</Text>
    </Box>
  );
};

export default AdminInfo;
