import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as service from "./service";

function Search() {
  const { searchTerm } = useParams();

  const navigate = useNavigate();

  const [results, setResults] = useState({});
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [query, setQuery] = useState("beatles");

  const search = async (searchTerm) => {
    const qwe = searchTerm || query;
    const response = await service.fullSearch(qwe);
    const results = response.search.data;
    setResults(results);
    setAlbums(results.albums);
    setArtists(results.artists);
    setTracks(results.tracks);
    setPlaylists(results.playlists);
  };

  useEffect(() => {
    if (searchTerm) {
      setQuery(searchTerm);
      search(searchTerm);
    } else {
      search(query);
    }
  }, [searchTerm]);

  return (
    <div>
      <h2>Search</h2>
      <button
        onClick={() => {
          navigate(`/project/search/${query}`);
          // search();
        }}
        className="btn btn-primary float-end"
      >
        Search
      </button>
      <input
        className="form-control w-75"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <h3>Albums</h3>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {albums.map((album) => {
                return (
                  <td>
                    <Link to={`/project/details/${album.id}`}>
                      <h5>{album.name}</h5>
                      <img src={service.getAlbumCover(album.id)} />
                    </Link>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <h3>Artists</h3>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {artists.map((artist) => {
                return (
                  <td>
                    <img
                      src={`https://api.napster.com/imageserver/v2/artists/${artist.id}/images/633x422.jpg`}
                    />
                    <pre>{JSON.stringify(artist, null, 2)}</pre>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Tracks</h3>
      <h3>Playlists</h3>
      {/* <pre>{JSON.stringify(results, null, 2)}</pre> */}
    </div>
  );
}

export default Search;
