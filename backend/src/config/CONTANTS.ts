import dotenv from "dotenv";

dotenv.config();

export const CONSTANTS = {
  PORT_SERVER: process.env.PORT_SERVER,
  CODEC_STREAMING: process.env.CODEC_STREAMING,
}