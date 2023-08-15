import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as service from "./service";

function Details() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [tracks, setTracks] = useState([]);

  const fetchAlbum = async () => {
    const album = await service.getAlbum(id);
    setAlbum(album);
  };

  const fetchTracks = async () => {
    const tracks = await service.getAlbumTracks(id);
    setTracks(tracks);
  };

  useEffect(() => {
    fetchAlbum();
    fetchTracks();
  }, []);

  return (
    <div>
      <h2>
        {album.name}
        <button
          onClick={() => {
            service.userLikesAlbum(album.id, {
              name: album.name,
              albumId: album.id,
            });
          }}
          className="btn btn-success float-end"
        >
          Like
        </button>
      </h2>
      <img src={service.getAlbumCover(album.id)} alt={album.name} />
      <h3>Tracks</h3>
      <ul className="list-group">
        {tracks.map((track) => (
          <li key={track.id} className="list-group-item">
            {track.name}
            <audio controls>
              <source src={track.previewURL} type="audio/mpeg" />
            </audio>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(tracks, null, 2)}</pre>
    </div>
  );
}

export default Details;
