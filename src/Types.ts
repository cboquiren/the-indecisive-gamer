export type TGame = {
  name: string,
  description: string,
  "genre-0": string,
  "genre-1"?: string,
  "genre-2"?: string,
  "genre-3"?: string,
  "genre-4"?: string,
  'allGenres': string[],
  image: string,
  developer: string,
  "platform-0": string,
  "platform-1"?: string,
  "platform-2"?: string,
  "platform-3"?: string,
  "platform-4"?: string,
  'allPlatforms': string[],
  id: number
}

export type TUser = {
  username: string,
  password: string,
  id: number
}

type TFavorite = {
  userId: number,
  gameId: number,
  type: "favorite"
  id: number,
  isFavorite: boolean
}

type TPlayed = {
  userId: number,
  gameId: number,
  type: "played",
  id: number,
  hasPlayed: boolean
}

type TOwned = {
  userId: number,
  gameId: number,
  type: "owned",
  id: number,
  isOwned: boolean
}

type THidden = {
  userId: number,
  gameId: number,
  type: "hidden",
  id: number,
  isHidden: boolean
}


export type TInteraction = TFavorite | TPlayed | TOwned | THidden;

export type TIBooleans = {
  isFavorite?: boolean,
  hasPlayed?: boolean,
  isOwned?: boolean,
  isHidden?: boolean
}

export type TITypes = 'favorite' | 'played' | 'owned' | 'hidden';