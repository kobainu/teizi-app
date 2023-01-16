import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true,
};

export const client = applyCaseMiddleware(
  axios.create({
    // ローカル用IPアドレス
    // baseURL: "http://localhost:3001/api/v1",
    baseURL: "http://35.72.153.234/api/v1",
  }),
  options
);
