import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={254}
    height={336}
    viewBox="0 0 254 336"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="6" y="155" rx="0" ry="0" width="190" height="27" />
    <rect x="7" y="196" rx="0" ry="0" width="220" height="10" />
    <rect x="6" y="228" rx="0" ry="0" width="103" height="27" />
    <rect x="149" y="230" rx="0" ry="0" width="83" height="27" />
    <rect x="7" y="269" rx="0" ry="0" width="235" height="35" />
    <rect x="4" y="0" rx="0" ry="0" width="247" height="137" />
  </ContentLoader>
);

export default Skeleton;
