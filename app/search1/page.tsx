import { use, Suspense } from "react";
import { fetchData } from "../data";
import Link from "next/link";
import Albums from "../search/albums";

export default async function SearchResults({ searchParams }) {
  console.log("render page......");
  const { q: query } = await searchParams;
  //   if (query === "") {
  //     return null;
  //   }

  //   if (albums.length === 0) {
  //     return (
  //       <p>
  //         No matches for <i>{query}</i>
  //       </p>
  //     );
  //   }
  return (
    <>
      <Link href={"/"}>Index</Link>
      <ul>
        <li>
          <Link href={"/search?q=a"}>q=a</Link>
          <Link href={"/search?q=b"}>q=b</Link>
          <Link href={`/search?q=${Math.random()}`}>q=random</Link>
        </li>
      </ul>
      00000
      <Albums query={query} />
      <div>11111</div>
      <Suspense fallback="loading albums">
        <Albums query={query} timeout={5000} />
      </Suspense>
    </>
  );
}