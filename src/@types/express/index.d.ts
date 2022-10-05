import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      register: {
        id: string;
      };
    }
  }
}
