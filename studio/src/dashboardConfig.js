export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fff62cf1405a14657162a0e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-826kubg8',
                  apiId: '88298cb8-7fca-4df1-a874-389fe7650b67'
                },
                {
                  buildHookId: '5fff62cf9d825f509a9758c9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-re2wzxan',
                  apiId: 'a2c77946-4d06-4490-86d5-e262b87036a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lawrenceagles/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-re2wzxan.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
