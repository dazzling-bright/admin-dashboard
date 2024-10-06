import { Box, Flex, Text, Collapse, FlexProps } from "@chakra-ui/react";
import { MdOutlineFolder } from "react-icons/md";
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
    fontSize: "20px",
    marginRight: "8px",
    color: "text.dark",
  };

  // List of sub-items for Maryland Space
  const spaceUnits = [
    { icon: <FaRegCircle style={iconStyles} />, label: "Protocol Unit" },
    { icon: <FaRegCircle style={iconStyles} />, label: "Ushering Unit" },
    { icon: <FaRegCircle style={iconStyles} />, label: "Men of Honor" },
    { icon: <FaRegCircle style={iconStyles} />, label: "G-Squad" },
  ];

  return (
    <Box
      borderBottom="2px solid"
      borderColor="border"
      py={6}
      px={2}
      color="text.light"
    >
      <Text  fontSize="lg"
            fontWeight="bold"
            textShadow="0px 2px 2px rgba(0,0,0,0.5)" mb={4}>
        Spaces
      </Text>

      {/* Maryland Section */}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        onClick={() => setIsOpen(!isOpen)}
        cursor="pointer"
        mb={4}
      >
        <Flex alignItems="center">
          <MdOutlineFolder style={iconStyles} />
          <Text>Maryland</Text>
        </Flex>

        <IoMdAdd
          style={{
            ...iconStyles,
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        />
      </Flex>
      {/* Collapsible content */}
      <Collapse in={isOpen} animateOpacity>
        <Box
          style={{
            transition: "height 0.3s ease, opacity 0.3s ease",
          }}
        >
          {spaceUnits.map((unit, index) => (
            <SpaceItem
              key={index}
              {...unit}
              _hover={{
                backgroundColor: "primary",
                color: "white",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              p={2}
              my={0}
              cursor="pointer"
              borderRadius="md"
            />
          ))}
        </Box>
      </Collapse>
      {/* Abuja Expression Section */}
      <Flex alignItems="center" justifyContent={"space-between"} pt={4}>
        <Flex alignItems="center">
          <MdOutlineFolder style={iconStyles} />
          <Text
            fontSize="lg"
            fontWeight="bold"
            textShadow="0px 2px 2px rgba(0,0,0,0.5)"
          >
            Abuja Expression
          </Text>
        </Flex>
        <FaChevronDown cursor="pointer" style={iconStyles} />
      </Flex>
    </Box>
  );
};

export default Spaces;
