import dotenv from "dotenv";
dotenv.config();

export const APP_NAME = process.env.APP_NAME || "home-yogi";
export const PORT = process.env.PORT || 3000;

export const DB_CONNECTION = process.env.DB_CONNECTION || "mysql";
export const DB_HOST = process.env.DB_HOST;
export const DB_USERNAME = process.env.DB_USERNAME;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
export const DB_PORT = process.env.DB_PORT || 3306;

export const NODE_ENV = process.env.NODE_ENV || "development";
export const isSSLEnable = process.env.isSSLEnable || false;

export function baseUrl(path = null) {
  let url = `http://${process.env.HOST}:${process.env.PORT}`;
  if (process.env.isSSLEnable === 'true') {
    url = `https://${process.env.HOST}:${process.env.PORT}`;
  }
  return url + (path ? `/${path}` : '');
}

export function apiBaseUrl(path = null) {
  let url = `http://${process.env.HOST}:${process.env.PORT}/api/v1`;
  if (process.env.isSSLEnable === 'true') {
    url = `https://${process.env.HOST}:${process.env.PORT}/api/v1`;
  }
  return url + (path ? `/${path}` : '');
}

export function managerApiBaseUrl(path = null) {
  let url = `http://${process.env.HOST}:${process.env.PORT}/manager/api/v1`;
  if (process.env.isSSLEnable === 'true') {
    url = `https://${process.env.HOST}:${process.env.PORT}/manager/api/v1`;
  }
  return url + (path ? `/${path}` : '');
}
