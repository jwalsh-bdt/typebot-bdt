// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from "@typebot.io/forge";
import { auth } from "./auth";
import { posthogBlock } from "./index";

export const posthogBlockSchema = parseBlockSchema(posthogBlock);
export const posthogCredentialsSchema = parseBlockCredentials(
  posthogBlock.id,
  auth.schema,
);
