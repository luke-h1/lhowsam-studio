// structure.ts
import {DefaultDocumentNodeResolver} from 'sanity/desk'
import {PreviewIFrame} from './components/Preview'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case 'post': {
      return S.document().views([
        S.view.form(),
        S.view.component(PreviewIFrame).options({}).title('Preview'),
      ])
    }
    case 'project': {
      return S.document().views([
        S.view.form(),
        S.view.component(PreviewIFrame).options({}).title('Preview'),
      ])
    }
    default:
      return S.document().views([S.view.form()])
  }
}
