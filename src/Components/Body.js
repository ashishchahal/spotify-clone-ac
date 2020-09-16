import React from "react";
import "../Styles/Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, deviceId }, dispatch] = useDataLayerValue();
  //console.log("🤦‍♂️eeeee", discover_weekly);

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcTV4lXBOKTDt`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  // spotify
  //   .getTrack("3jjujdWJ72nww5eGnfs2E7")
  //   .then((res) => console.log("getTrack", res))
  //   .catch((error) => console.log("Error☠️", error));

  /* device id of samsung m31s -> "f61f3a9ce8921c5ec58c6a6b969b7d132fe46ea3"
      // device id of macbook air ==> "a3859ef2bd4a719bf41c4c6c755311a2d095583b"
      // device id of Echo --> "ce0d01b6ce014b4c79b49beca30581de4b49c586" 
  */
  const playSong = (id) => {
    console.log("************ 💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️💁‍♂️", deviceId);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
        device_id: deviceId,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          //console.log(r, "-----------r------------- 🦏");
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      })
      .catch((error) => console.log(error, "playTrack error"));
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" className="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {/* list of songs */}
        {discover_weekly?.tracks?.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
