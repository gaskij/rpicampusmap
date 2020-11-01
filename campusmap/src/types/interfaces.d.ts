import { Feature, Point } from 'geojson';

export interface Comment {
  _id: string;
  author: string;
  text: string;
  timestamp: Date;
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
  id: string;
  properties: LocationProperties;
  geometry: Point;
}

export interface User {
  name: string;
  email: string;
  password: string;
  date: Date;
}
