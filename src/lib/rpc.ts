import { hc } from "hono/client";

import { AppType } from "@/app/api/[[...route]]/route";
import { getAppUrl } from "./utils";

export const client = hc<AppType>(getAppUrl());
