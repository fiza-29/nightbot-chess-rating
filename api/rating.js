export default async function handler(req, res) {
  const username = "fiza2908";

  const response = await fetch(
    https://api.chess.com/pub/player/${username}/stats
  );

  const data = await response.json();

  const rapid = data.chess_rapid?.last?.rating || "N/A";
  const blitz = data.chess_blitz?.last?.rating || "N/A";
  const bullet = data.chess_bullet?.last?.rating || "N/A";

  res.status(200).send(
    ♟️ Chess.com Ratings | Rapid: ${rapid} | Blitz: ${blitz} | Bullet: ${bullet}
  );
}