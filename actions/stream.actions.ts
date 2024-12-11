"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not logged in");
  if (!apiKey) throw new Error("API key not found");
  if (!apiSecret) throw new Error("API secret not found");

  const client = new StreamClient(apiKey, apiSecret);
  const validity = 60 * 60; // 1 hour in seconds

  const token = client.generateUserToken({ user_id: user.id, validity_in_seconds: validity });
  return token;
};
