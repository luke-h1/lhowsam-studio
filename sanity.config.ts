import {dashboardTool, projectUsersWidget, projectInfoWidget} from '@sanity/dashboard'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {markdownSchema} from 'sanity-plugin-markdown'
import {customStructure} from './deskStructure'
import {schemaTypes} from './schemas'
import { CustomMarkdownInput } from './src/components/CustomMarkdownInput'
import {defaultDocumentNode} from './src/defaultDocumentNode'

export default defineConfig({
  name: 'default',
  title: 'lhowsam.com',
  projectId: 'wdj6ou2i',
  dataset: 'production',
  plugins: [
    deskTool({
      structure: customStructure,
      defaultDocumentNode,
    }),
    visionTool(),
    markdownSchema({input: CustomMarkdownInput}),
    dashboardTool({
      widgets: [projectInfoWidget(), projectUsersWidget()],
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
