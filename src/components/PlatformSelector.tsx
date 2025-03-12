import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePaltforms";
import { Platform } from "../hooks/usePaltforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectPaltform: (platform: Platform) => void;
  selectedPlatformId: number;
}

const PlatformSelector = ({ onSelectPaltform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  const platform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPaltform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
