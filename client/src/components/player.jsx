import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  BiSkipPrevious,
  BiSkipNext,
  BiRepeat,
  BiShuffle,
} from "react-icons/bi";
import { BsPlayCircleFill, BsPauseFill } from "react-icons/bs";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const Player = ({ audioElement, isPlaying, setIsPlaying,currentSong }) => {
  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
  }
  const PlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <div className="w-96">
        <div className="flex flex-row gap-3 ml-24 align-items-center">
          <audio
            src="https://soundcloud.com/steveaoki/steve-aoki-chris-lake-tujamo-delirious-boneless-feat-kid-ink?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            ref={audioElement}
          />
          <BiShuffle size="20px" />
          <BiSkipPrevious size="25px" />
          {isPlaying ? (
            <BsPlayCircleFill
              className="pointer-cursor"
              size="25px"
              onClick={PlayPause}
            />
          ) : (
            <BsPauseFill
              className="pointer-cursor"
              size="25px"
              onClick={PlayPause}
            />
          )}
          <BiSkipNext size="25px" />
          <BiRepeat size="20px" />
        </div>
        <Slider
          aria-label="time-indicator"
          size="small"
          value={position}
          min={0}
          step={1}
          max={duration}
          onChange={(_, value) => setPosition(value)}
          sx={{
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            height: 4,
            "& .MuiSlider-thumb": {
              width: 8,
              height: 8,
              transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
              "&:before": {
                boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible": {
                boxShadow: `0px 0px 0px 8px ${
                  theme.palette.mode === "dark"
                    ? "rgb(255 255 255 / 16%)"
                    : "rgb(0 0 0 / 16%)"
                }`,
              },
              "&.Mui-active": {
                width: 20,
                height: 20,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 0.28,
            },
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mt: -2,
          }}
        >
          <TinyText>{formatDuration(position)}</TinyText>
          <TinyText>-{formatDuration(duration - position)}</TinyText>
        </Box>
      </div>
    </div>
  );
};

export default Player;
