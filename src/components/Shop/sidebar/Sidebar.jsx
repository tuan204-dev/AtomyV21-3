import { Box } from "@mui/material";
import Search from "./Search";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import ListBlog from "./ListBlog";

function Sidebar() {
  return (
    <Box sx={{width: 'fit-content'}}>
      <Search />
      <ListCategory />
      <ListProduct />
      <ListBlog />
    </Box>
  );
}

export default Sidebar;
