import categoriesJson from "../../assets/data/categories.json";
import restaurantsJson from "../../assets/data/data.json";
import { Categories, Restaurants } from "@my-types/index";
import { LayoutAnimation } from "react-native";

export enum SortStatus {
  name,
  rating,
}

export const repoKeyToPresian = (key: keyof FilterStatus) => {
  switch (key) {
    case "hasCoupen":
      return "دارای کوپن";

    case "hasDiscountValueForView":
      return "دارای تخفیف";

    case "isExpress":
      return "اسنپ اکسپرس";

    case "isDeliveryFree":
      return "ارسال رایگان";

    case "isEconomical":
      return "رستوران به صرفه";

      break;

    default:
      break;
  }
};

export type FilterStatus = {
  hasCoupen: boolean;
  hasDiscountValueForView: boolean;
  isExpress: boolean;
  isDeliveryFree: boolean;
  isEconomical: boolean;
};

export const getRestaurants = ({
  sortingStatus = SortStatus.name,
  filterStatus,
  categoryValue,
}: {
  sortingStatus: SortStatus | null;
  filterStatus: FilterStatus;
  categoryValue: number;
}): Restaurants[] => {
  let restaurants = restaurantsJson as unknown as Restaurants[];
  if (sortingStatus === SortStatus.rating) {
    restaurants = restaurants.sort((a, b) => b.rating - a.rating);
  } else if (sortingStatus === SortStatus.name) {
    restaurants = restaurants.sort((a, b) => a.title.localeCompare(b.title));
  }
  restaurants = restaurants.filter((restaurant) => {
    if (categoryValue > 0 && restaurant.category != categoryValue) {
      return false;
    }
    if (filterStatus.isDeliveryFree && restaurant.delivery_fee > 0) {
      return false;
    }
    if (filterStatus.hasCoupen && !restaurant.hasCoupon) {
      return false;
    }
    if (
      filterStatus.hasDiscountValueForView &&
      restaurant.discountValueForView <= 0
    ) {
      return false;
    }
    if (filterStatus.isEconomical && !restaurant.isEcommerce) {
      return false;
    }
    if (filterStatus.isExpress && !restaurant.isExpress) {
      return false;
    }
    return true;
  });

  return restaurants;
};

export const getCategories = (): Categories[] => {
  return categoriesJson as unknown as Categories[];
};
