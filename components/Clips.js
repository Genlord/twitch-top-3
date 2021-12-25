import React from "react";
import Image from "next/image";

export default function Clips({ clips, staticData2 }) {
  return (
    <div className="clipsContainer">
      {clips
        ? clips.data.map((item) => (
            <div className="clipWrapper" key={item.id}>
              <p className="clipTitle">{item.title}</p>
              <p>Views: {item.view_count.toLocaleString()}</p>
              <a href={item.url} className="clipThumbnail">
                <Image
                  src={item.thumbnail_url}
                  height={200}
                  width={360}
                  layout="fixed"
                />
              </a>
            </div>
          ))
        : staticData2.data.map((item) => (
            <div className="clipWrapper" key={item.id}>
              <p className="clipTitle">{item.title}</p>
              <p>Views: {item.view_count.toLocaleString()}</p>
              <a href={item.url} className="clipThumbnail">
                <div className="imageWrapper">
                  <Image
                  src={item.thumbnail_url}
                  height={200}
                  width={360}
                  layout="responsive"
                  className="clipImage"
                />
                </div>
                
              </a>
            </div>
          ))}
    </div>
  );
}
