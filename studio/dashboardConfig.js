export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
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
                  buildHookId: '614e1cb5acb04d1be97e777d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-17xf6y97',
                  apiId: 'b03a1f65-2679-4f8b-95e8-c84c000dba8f'
                },
                {
                  buildHookId: '614e1cb55b4604227b07a099',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wx6nq5d2',
                  apiId: 'ffeeeb65-8a66-4ca8-9a17-898ef090ed96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwang0816/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wx6nq5d2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
