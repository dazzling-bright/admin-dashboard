import { useState } from "react";
import { Flex, Heading, Box, Collapse, Text } from "@chakra-ui/react";
import { CiBoxList } from "react-icons/ci";
import { CgMoreO } from "react-icons/cg";
import { MdEventNote, MdNotifications } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa6";

const CommunitySection
 = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Array of dropdown items with corresponding React icons
  const dropdownItems = [
    { icon: MdNotifications, text: "Announcements" },
    { icon: MdEventNote, text: "Events" },
    { icon: GoPeople, text: "Members" },
    { icon: CiBoxList, text: "Courses" },
    { icon: CgMoreO, text: "More" },
  ];

  // Common icon styles
  const iconStyle = {
    fontSize: "24px",
    marginRight: "8px",
    color: "#333",
  };

  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        cursor="pointer"
        mb={4}
        px={2}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Heading
          fontSize="lg"
          fontWeight="bold"
          textShadow="1px 1px 2px rgba(0,0,0,0.3)"
        >
          Eagle’s Community
        </Heading>
        <FaChevronDown
          style={iconStyle}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box border="1px solid #D1D7DE" borderRadius="md" mb={6} px={4} pt={2} >
          {dropdownItems.map((item, index) => (
            <Flex key={index} alignItems="center" mb={4} gap={4} _hover={{
                backgroundColor: "#0687FC", 
                color: "white", 
                transition: "background-color 0.3s ease, color 0.3s ease", 
              }}
              p={2} 
              cursor={"pointer"}
              borderRadius="md" >
              <item.icon style={iconStyle} />
              <Text>{item.text}</Text>
            </Flex>
          ))}
        </Box>
      </Collapse>
    </>
  );
};

export default CommunitySection
;
