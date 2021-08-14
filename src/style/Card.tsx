import {
  createRestyleComponent,
  createVariant,
  VariantProps,
} from "@shopify/restyle";
import { Box } from "./Box";
import { Theme } from "./theme";

export const Card = createRestyleComponent<
  VariantProps<Theme, "cardVariants"> & React.ComponentProps<typeof Box>,
  Theme
>([createVariant({ themeKey: "cardVariants" })], Box);
