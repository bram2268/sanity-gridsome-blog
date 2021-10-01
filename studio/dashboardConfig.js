export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '61578f9b19ab3e0f09fde6f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-23368h4t',
                  apiId: '642d3cb9-10c5-4f65-a92d-de586fff90f3'
                },
                {
                  buildHookId: '61578f9bbb69fc120b48d8f8',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-7taxhjhc',
                  apiId: '8ff68507-efae-4aaa-b90d-bf4e9223599e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bram2268/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-7taxhjhc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
