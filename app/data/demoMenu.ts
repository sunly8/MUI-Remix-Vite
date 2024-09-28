export const demoMenu = [
  { name: 'Markdown', to: '/demo/markdown', children: [] },
  {
    name: 'FormData', to: '/demo/formdata', children: [
      { name: 'Native', to: '/demo/formdata' },
      { name: 'Fetch', to: '/demo/formdata/fetch' },
      { name: 'Api', to: '/demo/formdata/api' },
    ]
  },
  { name: 'Use context', to: '/demo/usecontext', children: [] }
];
