
import { defineType,defineField } from "sanity";

export const services = defineType({
    name:"service",
    type:"document",
    title:"Service",
    fields:[
        defineField(
        {
           name:"title",
           title:"Title",
           type:"string"
        }),
        defineField({
            name:"description",
            title:"Description",
            type:'array',
            of:[{type:"block"}],
        }),
        defineField({
            name:"icon",
            title:'icon',
            type:'image',
        }),
    ]
})