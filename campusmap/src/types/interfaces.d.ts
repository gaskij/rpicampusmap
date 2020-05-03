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

export interface Location {
  id: string;
  properties: {
    name: string;
    nick: string;
    category: string;
    description: string;
    popupContent: string;
    thumbnail?: string;
  };
  comments: Comment[];
  photos: Photo[];
  geometry: {
    type: string;
    coordinates: string[];
  };
}

export interface User {
  name: string;
  email: string;
  password: string;
  date: Date;
}
