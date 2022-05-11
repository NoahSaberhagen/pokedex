type StringOrNull = string | null;

interface PokemonSprites{
  back_default: StringOrNull,
  back_female: StringOrNull,
  back_shiny: StringOrNull,
  back_shiny_female: StringOrNull,
  front_default: StringOrNull,
  front_female: StringOrNull,
  front_shiny:  StringOrNull,
  front_shiny_female: StringOrNull
}

interface Pokemon{         
  name: string,
  sprites: PokemonSprites
};

