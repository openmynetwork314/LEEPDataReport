import { connection } from "../database/connect";

export const runQuery = (query: string, params: any[]): Promise<any> => {
    return new Promise((resolve, reject) => {
      connection.query(query, params, (error, results) => {
        if (error) return reject(error);
        resolve(results);
      });
    });
  };