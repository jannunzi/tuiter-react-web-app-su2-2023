import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as service from "./service";

function Details() {
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [tracks, setTracks] = useState([]);
  const [likes, setLikes] = useState([]);

  const fetchLikes = async () => {
    const likes = await service.getLikesForAlbum(id);
    setLikes(likes);
  };

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
    fetchLikes();
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
      <div className="row">
        <div className="col">
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
        </div>
        <div className="col">
          <h3>Likes</h3>
          <div className="list-group">
            {likes.map((like) => (
              <Link
                className="list-group-item"
                to={`/project/profile/${like.user._id}`}
              >
                {like.user.firstName} {like.user.lastName}
              </Link>
            ))}
          </div>
          <pre>{JSON.stringify(likes, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Details;
