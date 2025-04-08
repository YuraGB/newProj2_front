import { useGetCategories } from "@/modules/categoriesMenu/hook";
import { CategoryListItem } from "@/modules/categoriesMenu/CategoryListItem.tsx";

const CategoriesMenu = ({ onClose }: { onClose: () => void }) => {
  const { errorCategoryList, categoryList, isLoading } = useGetCategories();

  if (errorCategoryList || categoryList?.length === 0) return null;
  // todo skeleton
  if (isLoading) return null;

  if (!categoryList) return null;

  return (
    <ul className="grid w-[400px] gap-3 p-14 md:w-[500px] md:grid-cols-2 lg:w-[1000px]">
      {categoryList.map((categoryName) => (
        <CategoryListItem
          key={categoryName}
          category={categoryName}
          onClose={onClose}
        />
      ))}
    </ul>
  );
};

export default CategoriesMenu;
