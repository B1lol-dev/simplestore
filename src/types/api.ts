export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: `http://${string}` | `https://${string}`;
  rating: {
    count: number;
    rate: number;
  };
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}
