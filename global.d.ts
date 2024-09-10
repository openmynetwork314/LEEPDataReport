import { RequestUser } from "./src/index";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      JWT_SECRET: string;
      JWT_LIFETIME: string;
      DATABASE_HOST: string;
      DATABASE_PORT: string;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
    }
  }
  namespace Express {
    interface Request {
      user: RequestUser;
    }
  }
}

export {};
