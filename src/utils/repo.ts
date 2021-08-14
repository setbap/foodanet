import categoriesJson from "../../assets/data/categories.json";
import restaurantsJson from "../../assets/data/data.json";
import { Categories, Restaurants } from "@my-types/index";

export enum SortStatus {
  name,
  rating,
}

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
}: {
  sortingStatus: SortStatus;
  filterStatus: FilterStatus;
}): Restaurants[] => {
  let restaurants = restaurantsJson as unknown as Restaurants[];
  if (sortingStatus === SortStatus.rating) {
    restaurants = restaurants.sort((a, b) => b.rating - a.rating);
  } else {
    restaurants = restaurants.sort((a, b) => a.title.localeCompare(b.title));
  }
  restaurants = restaurants.filter((restaurant) => {
    if (filterStatus.isDeliveryFree && restaurant.delivery_fee > 0) {
      console.log(restaurant.delivery_fee);

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
