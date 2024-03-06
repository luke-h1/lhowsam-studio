// structure.ts
import {FaHome, FaFile, FaFileWord, FaQuestionCircle} from 'react-icons/fa'
import {StructureBuilder} from 'sanity/desk'
import {PreviewIFrame} from './components/Preview'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Main Page')
        .icon(FaHome)
        .child(
          S.document()
            .views([
              S.view.form(),
              S.view.component(PreviewIFrame).options({tes: 'ss'}).title('Preview'),
            ])
            .schemaType('mainPage')
            .documentId('mainPage'),
        ),
      S.divider(),
      S.documentTypeListItem('page').title('Page').icon(FaFile),
      S.documentTypeListItem('blog').title('Blog').icon(FaFileWord),
      S.documentTypeListItem('faq').title('FAQs').icon(FaQuestionCircle),
    ])

export const defaultDocumentNode = (S: StructureBuilder) =>
  S.document().views([S.view.form(), S.view.component(PreviewIFrame).options({}).title('Preview')])
