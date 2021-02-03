import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import axios from "axios";

const YoutubeChannel = () => {
  // State
  const [youtube, setYoutube] = useState({
    items: [],
    videoId: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_YOUTUBE_PLAYLIST_ID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=100`
      )
      .then((res) => {
        setYoutube({
          items: res.data.items,
          videoId: res.data.items[0].snippet.resourceId.videoId,
        });
      });
  }, []);

  return (
    <div className="youtube-channel pb-5">
      <Container className="mt-5">
        <h1 className="fw-bold text-center mx-3 text-white py-5 mb-0">
          ڈیجی پاکستان قومی ہنر مند ترقیاتی پروگرام
        </h1>

        <div className="row g-0">
          <div className="col-lg-9">
            <iframe
              title={youtube.videoId}
              width="100%"
              height="455"
              src={`https://www.youtube.com/embed/${youtube.videoId}?rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-lg-3 ps-3 videos pb-3 mt-4 mt-lg-0">
            {youtube.items.map((video, ind) => {
              return (
                <div
                  key={ind}
                  onClick={() =>
                    setYoutube({
                      ...youtube,
                      videoId: video.snippet.resourceId.videoId,
                    })
                  }
                  className="d-flex align-items-start mt-3 pointer youtube-thumbnail"
                >
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt="d"
                    width="100"
                  />
                  <p className="mb-0 text-white fw-bold small mx-2 link">
                    {video.snippet.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default YoutubeChannel;
