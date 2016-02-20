module.exports = {
    block: 'page',
    title: 'GalleryViewer',
    favicon : './images/favicon.ico',
    head: [
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
      {
            block : 'viewport',
            js: true,
            content : [
              {
                  block: 'controls',
                  js: true,
                  content: [
                          {
                              elem: 'left',
                              content: '&nbsp;'
                          },
                          {
                              elem: 'right',
                              content: '&nbsp;'
                          }
                  ]      
              },
              {
                block: 'image',
                url: ''
              },
              {
                block: 'wrapper',
                content: {
                  block: 'files',
                  files: [                           
                          { 
                              title: 'Car &amp; Grass',
                              thumb: './images/thumbs/1.jpg',
                              image: './images/large/1.jpg'
                          },
                          {
                              title: 'Summer Flower',
                              thumb: './images/thumbs/2.jpg',
                              image: './images/large/2.jpg'
                          },
                          {
                              title: 'Collection One S',
                              thumb: './images/thumbs/3.jpg',
                              image: './images/large/3.jpg'
                          },
                          {
                              title: 'Road H530',
                              thumb: './images/thumbs/4.jpg',
                              image: './images/large/4.jpg'
                          },
                          {
                              title: 'Orange Flower',
                              thumb: './images/thumbs/5.jpg',
                              image: './images/large/5.jpg'
                          },
                          { 
                              title: 'Important to be first',
                              thumb: './images/thumbs/6.jpg',
                              image: './images/large/6.jpg'
                          },
                          {
                              title: 'Summer Sky or Pants',
                              thumb: './images/thumbs/7.jpg',
                              image: './images/large/7.jpg'
                          },
                          {
                              title: 'Visual Data Store',
                              thumb: './images/thumbs/8.jpg',
                              image: './images/large/8.jpg'                              
                          },
                          {
                              title: 'Indian Holy',
                              thumb: './images/thumbs/9.jpg',
                              image: './images/large/9.jpg'
                          },
                          {
                              title: 'Say Hi!',
                              thumb: './images/thumbs/10.jpg',
                              image: './images/large/10.jpg'
                          },
                          { 
                              title: 'Some Rocket launch',
                              thumb: './images/thumbs/11.jpg',
                              image: './images/large/11.jpg'
                          },
                          {
                              title: 'Where is our Soul',
                              thumb: './images/thumbs/12.jpg',
                              image: './images/large/12.jpg'
                          },
                          {
                              title: 'Touch Some',
                              thumb: './images/thumbs/13.jpg',
                              image: './images/large/13.jpg'
                          },
                          {
                              title: 'Get your Style',
                              thumb: './images/thumbs/14.jpg',
                              image: './images/large/14.jpg'
                          },
                          {
                              title: 'Alien Text',
                              thumb: './images/thumbs/15.jpg',
                              image: './images/large/15.jpg'
                          },
                          {
                              title: 'Touch the Button Off',
                              thumb: './images/thumbs/16.jpg',
                              image: './images/large/16.jpg'
                          }
                  ]
                }
              }

            ]
      }
    ]
};
