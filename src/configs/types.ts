import { EnvVariable } from "../app/interface";
export const envVariable: EnvVariable = {
  domain: process.env.DOMAIN || "",
  clientId: process.env.CLIENT_ID || "",
  clientSecret: process.env.CLIENT_SECRET || "",
};

