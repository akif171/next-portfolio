import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: 'chl7zs8p',
    dataset: 'production',
    title: "Sanity Personal Portfolio",
    apiVersion: "2023-08-21",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
})


export default config;