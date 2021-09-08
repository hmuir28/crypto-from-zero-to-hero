import dotenv from 'dotenv';

dotenv.config();

const hostname = process.env.SERVER_HOSTNAME || 'localhost';
const port = process.env.SERVER_PORT || 3000

const server = {
  hostname,
  port,
};

const config = {
  server,
};

export default config;
