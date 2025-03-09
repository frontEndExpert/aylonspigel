export default function handler(req, res) {
  res.setHeader("Content-Type", "text/plain")
  res
    .status(200)
    .send(
      "tiktok-developers-site-verification=34bhZfkTmZkBvcQnkVwwJVKe0bIFd6cw"
    )
}
