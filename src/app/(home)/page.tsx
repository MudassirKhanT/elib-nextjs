import Banner from "@/app/(home)/components/Banner";
import Image from "next/image";
import BookList from "./components/BookList";
import { Book } from "@/types";
export default async function Home() {
  //data fetching
  //console.log("url", process.env.NEXT_PUBLIC_BACKEND_URL);
  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An Error Occured While Fetching The Books");
  }
  const books: Book[] = await response.json();
  //console.log("Books:", books);
  //server component
  //client component
  return (
    //Here We Need To Use This NavBar For Every Page So This May Cause To Duplication Of Code
    //We Need To Avoid This
    //By Using The Feature Of Layouts In Next Js We Can Remove Duplication
    //So Paste It Above Children Component Of Body Part
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
