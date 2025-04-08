import PrefetchNavLink from "@/components/prefetchNavLink";
import { NavigationMenuLink } from "@/components/ui/navigation-menu.tsx";

export const CategoryListItem = ({
  category,
  onClose,
}: {
  category: string;
  onClose: () => void;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild={true}>
        <PrefetchNavLink
          to={`/category/${category}`}
          onClickAction={onClose}
          loadComponent={() => import("@/pages/Category")}
        >
          <span className="text-primary text-lg text-gray-900 hover:underline">
            {category}
          </span>
        </PrefetchNavLink>
      </NavigationMenuLink>
    </li>
  );
};
