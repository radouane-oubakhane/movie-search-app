import { Menu, MenuButton, MenuItem, MenuList, Heading } from "@chakra-ui/react"

interface Props {
    title: string;
    category: string[];
    setCategory: (category: string) => void;
}


const CategorySelector = ({ title, category, setCategory }: Props) => {
  return (
    <Menu>
  <MenuButton>
    <Heading as='b' size='sm'>{title}</Heading>
  </MenuButton>
  <MenuList>
    {category.map((category) => (
        <MenuItem textTransform='capitalize' key={category} onClick={() => setCategory(category)}>{category}</MenuItem>))}
  </MenuList>
</Menu>
  )
}

export default CategorySelector


