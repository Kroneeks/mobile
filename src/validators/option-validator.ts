// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  { label: "Белый", value: "white", tw: "bg-white-950" },
  { label: "Черный", value: "black", tw: "bg-zinc-950" },
  {
    label: "Синий",
    value: "blue",
    tw: "bg-blue-950",
  },
  { label: "Красный", value: "rose", tw: "bg-rose-800" },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "Кружка",
      value: "cup",
    },
    {
      label: "Бокал",
      value: "glass",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  label: "Тип страз",
  options: [
    {
      label: "Одноцветные",
      value: "onecolor",
      description: undefined,
      price: PRODUCT_PRICES.material.onecolor,
    },
    {
      label: "Цветные",
      value: "multicolor",
      description: "",
      price: PRODUCT_PRICES.material.multicolor,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  label: "Допоолнительно",
  options: [
    {
      label: "Стандартная отделка",
      value: "smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Обработка термостойким клеем",
      value: "textured",
      description: "Добавление прочности вашему рисунку",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
