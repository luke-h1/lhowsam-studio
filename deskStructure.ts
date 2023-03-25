import {MdSettings} from 'react-icons/md'
import {StructureBuilder} from 'sanity/desk'

export const customStructure = (S: StructureBuilder) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(S.document().schemaType('siteSettings')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['variant', 'siteSettings'].includes(listItem.getId() as string)
      ),
    ])
}
