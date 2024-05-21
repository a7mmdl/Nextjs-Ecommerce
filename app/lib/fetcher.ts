// lib/fetcher.ts
import { client } from "../lib/sanity";

export const getData = async () => {
    const query = `*[_type == "product"][0...4] | order(_createdAt desc) {
        _id,
        price,
        name,
        "slug": slug.current,
        "categoryName": category->name,
        "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);
  return data;
};