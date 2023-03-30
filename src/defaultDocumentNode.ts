import {DefaultDocumentNodeResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case 'post': {
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: 'https://lhowsam.com/api/preview',
          })
          .title('Preview'),
      ])
    }
    case 'project': {
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: 'https://lhowsam.com/api/preview',
          })
          .title('Preview'),
      ])
    }
    default:
      return S.document().views([S.view.form()])
  }
}