import { useState } from "react";
import { Flex, Heading, Box, Collapse, Text } from "@chakra-ui/react";
import { CiBoxList } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { MdEventNote, MdNotifications } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";

const CommunitySection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array of dropdown items with corresponding React icons
  const dropdownItems = [
    { icon: MdNotifications, text: "Announcements" },
    { icon: MdEventNote, text: "Events" },
    { icon: GoPeople, text: "Members" },
    { icon: CiBoxList, text: "Courses" },
    { icon: CgMoreO, text: "More" },
  ];

  // Common icon styles (including chevron)
  const iconStyle = {
    fontSize: "20px",
    marginRight: "8px",
    color: "text.light",
    transition: "transform 0.3s ease, color 0.3s ease",
    transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
  };

  return (
    <>
      <Box>
        {/* Header Section */}
        <Flex
          alignItems="center"
          justifyContent="space-between"
          cursor="pointer"
          px={2}
          h="70px"
          borderBottom="1px solid"
          borderColor="border"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Heading
            fontSize="lg"
            fontWeight="bold"
            textShadow="0px 2px 2px rgba(0,0,0,0.5)"
            color="text.light"
          >
            Eagle’s Community
          </Heading>

          <FaChevronDown style={iconStyle} />
        </Flex>

        {/* Collapsible Content */}
        <Collapse in={isOpen} animateOpacity>
          <Box px={4} pt={2} >
            {dropdownItems.map((item, index) => (
              <Flex
                key={index}
                alignItems="center"
                m={0}
                gap={4}
                _hover={{
                  backgroundColor: "primary",
                  color: "white",
                  transition: "background-color 0.3s ease, color 0.3s ease",
                }}
                p={2}
                cursor="pointer"
                borderRadius="md"
              >
                {/* Icon with transition */}
                <Box
                  as={item.icon}
                  style={iconStyle}
                  _hover={{ color: "white" }}
                />
                <Text>{item.text}</Text>
              </Flex>
            ))}
          </Box>
        </Collapse>
      </Box>
    </>
  );
};

export default CommunitySection;
