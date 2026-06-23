export const getYouTubeEmbed = (url) => {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};
