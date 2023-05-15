import { Configuration } from "@oapi/runtime";

export const config = new Configuration({
  basePath: "http://localhost:3000",
  headers: {
    Accept: "application/json",
  },
});
