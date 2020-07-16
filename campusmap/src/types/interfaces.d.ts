import { Feature, Point } from 'geojson';

export interface Comment {
  author: string;
  text: string;
  date: Date;
}

export interface Photo {
  author: string;
  description: string;
  src: string;
  date: Date;
}

export interface LocationProperties {
  name: string;
  nick: string;
  category: string;
  description: string;
  popupContent: string;
  thumbnail: string;
  amenity?: string;
  comments?: Comment[];
  photos?: Photo[];
}

export interface Location extends Feature {
  _id: string;
  id: string;
  properties: LocationProperties;
  geometry: Point;
  comments?: Comment[];
  photos?: Photo[];
}

export interface User {
  name: string;
  email: string;
  password: string;
  date: Date;
}
