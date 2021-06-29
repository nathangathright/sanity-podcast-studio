export default {
  widgets: [
    {
      name: 'sanity-tutorials'
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-podcast-studio-studio-jkfnvw62',
                  apiId: '5be2d2d9-dcde-4b1e-a7d6-b0e4f3e6898a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nathangathright/sanity-podcast-studio',
            category: 'Code'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: []},
      layout: {width: 'medium'}
    }
  ]
}
