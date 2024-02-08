import { type SchemaTypeDefinition } from "sanity";
import { services } from "./services";
import { email } from "./email";
import { aboutus} from "./aboutus"
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services,aboutus],
};
