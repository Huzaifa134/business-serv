import { type SchemaTypeDefinition } from "sanity";
import { services } from "./services";
import { email } from "./email";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [email, services],
};
