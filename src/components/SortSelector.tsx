import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>ff</MenuItem>
        <MenuItem>gg</MenuItem>
        <MenuItem>hh</MenuItem>
        <MenuItem>jj</MenuItem>
        <MenuItem>dd</MenuItem>
        <MenuItem>aa</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
