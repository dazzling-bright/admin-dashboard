import { Box, Flex, Text, Collapse, FlexProps } from "@chakra-ui/react";
import { MdFolder } from "react-icons/md";
import { FaRegCircle, FaChevronDown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { useState } from "react";

interface SpaceItemProps extends FlexProps {
  icon: JSX.Element;
  label: string;
}

const SpaceItem: React.FC<SpaceItemProps> = ({ icon, label, ...props }) => (
  <Flex alignItems="center" my={4} ms={2} {...props}>
    {icon}
    <Text mb={0}>{label}</Text>
  </Flex>
);

const Spaces: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const iconStyles = {
    fontSize: "24px",
    marginRight: "8px",
    color: "#333",
  };

  // List of sub-items for Maryland Space 
  const spaceUnits = [
    { icon: <FaRegCircle style={iconStyles} />, label: "Protocol Unit" },
    { icon: <FaRegCircle style={iconStyles} />, label: "Ushering Unit" },
    { icon: <FaRegCircle style={iconStyles} />, label: "Men of Honor" },
    { icon: <FaRegCircle style={iconStyles} />, label: "G-Squad" },
  ];

  return (
    <Box borderTop="2px solid #8F8F8F" pt={4} px={2} mt={6}>
      <Flex alignItems="center" mb={4}>
        <Text fontWeight="bold" textShadow="1px 1px 2px rgba(0,0,0,0.3)">
          Spaces
        </Text>
      </Flex>

      {/* Maryland Section */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsOpen(!isOpen)}
        cursor="pointer"
      >
        <Flex alignItems="center">
          <MdFolder style={iconStyles} />
          <Text mb={0} ml={2}>
            Maryland
          </Text>
        </Flex>
        <IoMdAdd style={iconStyles} />
      </Flex>
      {/** Collapsible */}
      <Collapse in={isOpen}>
        {spaceUnits.map((unit, index) => (
          <SpaceItem
            key={index}
            {...unit}
            _hover={{
              backgroundColor: "#0687FC",
              color: "white",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
            p={2}
            cursor="pointer"
            borderRadius="md"
          />
        ))}
      </Collapse>

      {/* Abuja Expression Section */}
      <Flex alignItems="center" justifyContent={"space-between"} mt={4}>
        <Flex alignItems="center">
          <MdFolder style={iconStyles} />
          <Text fontWeight="bold" textShadow="1px 1px 2px rgba(0,0,0,0.3)">
            Abuja Expression
          </Text>
        </Flex>
        <FaChevronDown style={iconStyles} />
      </Flex>
    </Box>
  );
};

export default Spaces;
