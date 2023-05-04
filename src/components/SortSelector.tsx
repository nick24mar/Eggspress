import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  const [selectedSort, setSelectedSort] = useState("Relevance");

  const sortValue = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {selectedSort}
      </MenuButton>
      <MenuList>
        {sortValue.map((sortName) => (
          <MenuItem key={sortName} onClick={() => setSelectedSort(sortName)}>
            {sortName}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
