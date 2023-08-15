import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const NAPSTER_API_BASE =
  "https://napi-v2-2-cloud-run-b3gtd5nmxq-uw.a.run.app/v2.2/";
const NAPSTER_SEARCH_API = `${NAPSTER_API_BASE}/search/verbose?apikey=${process.env.REACT_APP_NAPSTER_API_KEY}`;
const NAPSTER_ALBUM_API = `${NAPSTER_API_BASE}/albums`;

const ALBUM_API = "http://localhost:4000/api/albums";

export const userLikesAlbum = async (albumId, album) => {
  const response = await request.post(`${ALBUM_API}/${albumId}/likes`, album);
  return response.data;
};

export const fullSearch = async (query) => {
  const response = await axios.get(`${NAPSTER_SEARCH_API}&query=${query}`);
  return response.data;
};

export const getAlbum = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_ALBUM_API}/${albumId}?apikey=${process.env.REACT_APP_NAPSTER_API_KEY}`
  );
  const albums = response.data.albums;
  if (albums.length > 0) {
    return albums[0];
  }
  return {};
};

export const getAlbumTracks = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_ALBUM_API}/${albumId}/tracks?apikey=${process.env.REACT_APP_NAPSTER_API_KEY}`
  );
  return response.data.tracks;
};

export const getAlbumCover = (albumId) =>
  `https://api.napster.com/imageserver/v2/albums/${albumId}/images/400x400.jpg`;
