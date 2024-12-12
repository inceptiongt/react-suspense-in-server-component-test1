import { fetchData, getData } from "../data";

export default async function ({ query, timeout }) {
  const albums = await getData(`/search?q=${query}`, timeout);
  console.log("albumsList", albums);
  return (
    <>
      {albums.length === 0 ? (
        <p>
          No matches for <i>{query}</i>
        </p>
      ) : (
        <>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>
                {album.title} ({album.year})
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
