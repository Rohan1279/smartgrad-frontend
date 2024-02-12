// export const fakeData = {
//     "meta": {
//       "url": "/our-company",
//       "title": "Title",
//       "seo": {}
//     },
//     "banner": "image.png",
//     "header": "Hello",
//     "paragraph": "lorem...",
//     "cta": {
//       "type": "phone",
//       "title": "Click here",
//       "payload": {
//         "phone": "+9923131",
//         "email": "tanin@gmail.com",
//         "url": "/cta/text"
//       }
//     },
//     "sections": [
//       {
//         "type": "generic",
//         "data": [
//           {
//             "image": "/image.png",
//             "title": "Hello 1",
//             "paragraph": "lorem...",
//             "cta": {
//               "type": "phone",
//               "title": "Click here",
//               "payload": {
//                 "phone": "+9923131",
//                 "email": "tanin@gmail.com",
//                 "url": "/cta/text"
//               }
//             }
//           }
//         ]
//       },
//       {
//         "type": "slider",
//         "data": [
//           {
//             "image": "/photo.png",
//             "paragraph": "lorem...",
//             "cta": {
//               "type": "phone",
//               "title": "Click here",
//               "payload": {
//                 "phone": "+9923131",
//                 "email": "tanin@gmail.com",
//                 "url": "/cta/text"
//               }
//             }
//           },
//           {
//             "image": "/photo.png",
//             "paragraph": "lorem..."
//           }
//         ]
//       },
//       {
//         "type": "gallery",
//         "data": [
//           {
//             "title": "My image 1",
//             "url": "gallery_image.png"
//           },
//           {
//             "title": "My image 1",
//             "url": "gallery_image.png"
//           }
//         ]
//       },
//       {
//         "type": "generic",
//         "data": [
//           {
//             "image": "/image.png",
//             "title": "Hello 1",
//             "paragraph": "lorem...",
//             "cta": {
//               "type": "phone",
//               "title": "Click here",
//               "payload": {
//                 "phone": "+9923131",
//                 "email": "tanin@gmail.com",
//                 "url": "/cta/text"
//               }
//             }
//           },
//           {
//             "image": "/image.png",
//             "title": "Hello 1",
//             "paragraph": "lorem...",
//             "cta": {
//               "type": "phone",
//               "title": "Click here",
//               "payload": {
//                 "phone": "+9923131",
//                 "email": "tanin@gmail.com",
//                 "url": "/cta/text"
//               }
//             }
//           }
//         ]
//       }
//     ]
//   }


export const fakeData = {
  "meta": {
    "url": "/sample-api",
    "title": "Fake Data API",
    "seo": {}
  },
  "banner": "https://assets-global.website-files.com/5a9ee6416e90d20001b20038/6289efcc9a52f65ff46e8400_white-gradient.png",
  "header": "Welcome to our Sample API",
  "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "cta": {
    "type": "email",
    "title": "Contact Us",
    "payload": {
      "email": "info@example.com",
      "phone": "+123456789",
      "url": "/contact-us"
    }
  },
  "sections": [
    {
      "type": "generic",
      "data": [
        {
          "image": "/sample-image1.png",
          "title": "Section 1",
          "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "cta": {
            "type": "phone",
            "title": "Learn More",
            "payload": {
              "phone": "+987654321",
              "email": "section1@example.com",
              "url": "/section1"
            }
          }
        }
      ]
    },
    {
      "type": "slider",
      "data": [
        {
          "image": "/slide1.png",
          "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "cta": {
            "type": "url",
            "title": "View Details",
            "payload": {
              "url": "/slider-item1"
            }
          }
        },
        {
          "image": "/slide2.png",
          "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "cta": {
            "type": "url",
            "title": "View Details",
            "payload": {
              "url": "/slider-item2"
            }
          }
        }
      ]
    },
    {
      "type": "gallery",
      "data": [
        {
          "title": "Gallery Image 1",
          "url": "/gallery-image1.png"
        },
        {
          "title": "Gallery Image 2",
          "url": "/gallery-image2.png"
        }
      ]
    },
    {
      "type": "generic",
      "data": [
        {
          "image": "/sample-image2.png",
          "title": "Section 2",
          "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "cta": {
            "type": "email",
            "title": "Contact Us",
            "payload": {
              "email": "section2@example.com",
              "phone": "+987654321",
              "url": "/section2"
            }
          }
        },
        {
          "image": "/sample-image3.png",
          "title": "Section 3",
          "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "cta": {
            "type": "phone",
            "title": "Learn More",
            "payload": {
              "phone": "+987654321",
              "email": "section3@example.com",
              "url": "/section3"
            }
          }
        }
      ]
    }
  ]
}
