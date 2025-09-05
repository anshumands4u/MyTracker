export type GetCategoriesByType = {
  id: number;
  name: string;
  iconId: number;
  icon: {
    id: number;
    name: string;
    setName: string;
    color: string;
    type: string;
  };
};

export type IconFamily =
  | "Ionicons"
  | "FontAwesome"
  | "MaterialIcons"
  | "Feather"
  | "MaterialCommunityIcons";
