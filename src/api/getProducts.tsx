import { StaticImageData } from "next/image";

export interface ProductInterface {
  id: number;
  name: string;
  brand?: string;
  description?: string;
  photo?: string;
  price: string;
  createdAt?: string;
  updatedAt?: string;
  quantity?: number;
}

async function getData() {
    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        }
    };
    const response = fetch("https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=6&sortBy=id&orderBy=DESC", options).then((response) => response.json());
    return response;
}

export default async function getProducts() {
  const data = await getData();
  return data;
}