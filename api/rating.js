export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://api.chess.com/pub/player/fiza2908/stats"
    );

    const data = await response.json();

    res.setHeader("Content-Type", "text/plain");

    res.end(
      "♟️ Chess.com Ratings | Rapid: " +
      (data.chess_rapid?.last?.rating || "N/A") +
      " | Blitz: " +
      (data.chess_blitz?.last?.last?.rating || "N/A") +
      " | Bullet: " +
      (data.chess_bullet?.last?.rating || "N/A")
    );

  } catch (error) {
    res.status(500).end(error.toString());
  }
}