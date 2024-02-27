import { type SchemaTypeDefinition } from "sanity";
import { services } from "./services";
import { email } from "./email";
import { aboutus } from "./aboutus";
import { term } from "./term";
import { privacy } from "./privacy";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services, aboutus, term, privacy],
};
