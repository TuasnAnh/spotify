import React from "react";
import "./SongRow.css";

function songRow({ track = "test" }) {
  return (
    <div className="songRow">
      <img className="songRow_album" src={track.album.images[0].url} alt="" />
      <div className="songRow_info">
        <h1>{track.album.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default songRow;
