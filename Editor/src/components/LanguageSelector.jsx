import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { LANGUAGE_VERSIONS } from "../constants.js";

const languages = Object.entries(LANGUAGE_VERSIONS);
const Active = "blue.400";

const LanguageSelector = ({ lang, onSelect }) => {
  return (
    <Box ml={2}>
      <Text mb={3} fontSize={"lg"}>
        Language
      </Text>
      <Menu isLazy>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          fontSize={"sm"}
          mb={4}
        >
          {lang}
        </MenuButton>
        <MenuList bg={"#110c1b"}>
          {languages.map(([language, version]) => (
            <MenuItem
              key={language}
              bg={language === lang ? "gray.700" : "transparent"}
              color={language === lang ? Active : ""}
              _hover={{ color: Active, bg: "gray.900" }}
              onClick={() => onSelect(language)}
            >
              {language}
              &nbsp;
              <Text as={"span"} color={"gray.600"} fontSize={"sm"}>
                {version}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
