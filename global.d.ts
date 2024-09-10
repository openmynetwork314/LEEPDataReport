import { RequestUser } from "./src/index";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      DATABASE_URI: string;
      JWT_SECRET: string;
      JWT_LIFETIME: string;
    }
  }
  namespace Express {
    interface Request {
      user: RequestUser;
    }
  }
}

export {};
