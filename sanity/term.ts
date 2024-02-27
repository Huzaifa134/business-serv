import { defineType, defineField } from "sanity";
export const term = defineType({
  name: "terms",
  type: "document",
  title: " Terms & Cond ",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Heading 1", value: "h1" },
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Quote", value: "blockquote" },
            { title: "Hidden", value: "blockComment" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
        },
      ],
    }),
  ],
});
