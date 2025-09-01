import { fetchCategories } from "@/lib/products-api";
import SidebarList from "./_ui/SidebarList/SidebarList";

const CategorySidebar = async () => {
  const categories = await fetchCategories();
  return (
    <>
      <h3>Categories</h3>
      <nav>
        <SidebarList categories={categories} />
      </nav>
    </>
  );
};

export default CategorySidebar;
