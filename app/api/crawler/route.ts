import { NextResponse } from "next/server";

const knownBots = ["Googlebot", "ia_archiver"];

/**
 * Sends a Discord notification with the given message.
 *
 * This function is used by the crawler API to notify us of changes to
 * YouTube videos. It posts a message to the Discord channel with the
 * given message.
 *
 * @param {string} message The message to send to Discord.
 * @returns {Promise<void>} A promise that resolves when the message has
 *     been sent.
 */
async function sendDiscordNotification(message: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not set");
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: message }),
  });
}

/**
 * Checks if the request is from a known crawler and sends a notification to Discord
 * if it is. Returns a JSON response with a message indicating that the crawler
 * was detected.
 *
 * @param request - The request object
 * @returns - A JSON response indicating that the crawler was detected
 */
export async function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") || "Unknown";
  const ip = request.headers.get("x-forwarded-for") || "Unknown IP";

  const isCrawler = knownBots.some((bot) => userAgent.includes(bot));

  if (isCrawler) {
    const timestamp = new Date().toISOString();
    const notification = `Crawler detected:\nUser-Agent: ${userAgent}\nIP: ${ip}\nTime: ${timestamp}`;
    await sendDiscordNotification(notification);
  }

  return NextResponse.json({ message: "Crawler detected" });
}
