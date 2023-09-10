import { Menu, MenuButton, MenuItem, MenuList, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom";

interface Props {
    title: string;
    route: string;
    categories: {title: string, route: string}[]
    setCategory: (category: string) => void;
}


const CategorySelector = ({ title, route, categories, setCategory }: Props) => {
  return (
    <Menu>
  <MenuButton>
    <Heading as='b' size='sm' whiteSpace='nowrap'>{title}</Heading>
  </MenuButton>
  <MenuList>
    {categories.map((category, index) => (
      <Link key={index} to={`/${route}/${category.route}`}>
        <MenuItem 
        textTransform='capitalize' 
        onClick={() => setCategory(category.title)
        }>
          {category.title}
        </MenuItem>
      </Link>))
    }  
  </MenuList>
</Menu>
  )
}

export default CategorySelector 


