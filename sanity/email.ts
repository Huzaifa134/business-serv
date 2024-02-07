import { defineType, defineField } from "sanity";

export const email = defineType({
  name: "email_enter",
  type: "document",
  title: "email",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "icon",
      title: "icon",
      type: "image",
    }),
  ],
});
