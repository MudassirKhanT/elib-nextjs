export type Book = {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  file: string;
  author: {
    name: string;
  };
};
