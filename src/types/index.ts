export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  About: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
};

export type AboutTabParamList = {
  AboutTabScreen: undefined;
};

export interface Categories {
  image: string;
  title: string;
  value: number;
  sub?: Categories[];
}

export interface Restaurants {
  id: number;
  title: string;
  code: string;
  type: Type;
  score: number;
  highlight: string;
  category: number;
  rating: number;
  description: string;
  commentCount: number;
  address: string;
  vendorType: ChildType;
  childType: ChildType;
  isOpen: boolean;
  isPreorderEnabled: boolean;
  isExpress: boolean;
  delivery_fee: number;
  featured: string;
  hasCoupon: boolean;
  couponCount: number;
  bestCoupon: string;
  deliver: boolean;
  backgroundImage: string;
  eta: number;
  minEta: number;
  maxEta: number;
  isPickup: boolean;
  bid: boolean;
  discountValueForView: number;
  isEcommerce: boolean;
  isEconomical: boolean;
  isGroceryVip: boolean;
  isGroceryReturnable: boolean;
  isGroceryEconomic: boolean;
  superTypeAlias: ChildType;
}

export enum ChildType {
  Caffe = "CAFFE",
  Restaurant = "RESTAURANT",
}

export enum Type {
  Vendor = "VENDOR",
}
