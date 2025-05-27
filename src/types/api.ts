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
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
