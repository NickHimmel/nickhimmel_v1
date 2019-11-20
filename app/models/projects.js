import React from 'react';

export default {
    photo: [
        {
            projectTitle: "nycthemeron",
            projectSubtitle: "Thesis for MPS in digital photography at SVA, 2008",
            projectDescriptionBold: "Nyc · the · me · ron:",
            projectDescription: " Greek meaning 24 consecutive hours and is the composite of the words for night and day",
            projectText: "For my thesis I created composite images that featured places I have lived, memories I have of growing up in New York and bits of New York City history. I combined built models with landscapes I photographed and added textures. The models were built primarily from coffee stirrers and hot glue. The eight images span from morning to night.",
            projectImages: [
              {id: 1, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/001_Nick_Himmel_A_Corner_in_the_Past.jpg", alt: "A Corner in The Past"},
              {id: 2, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/002_Nick_Himmel_El_And_Lucida.jpg", alt: "El and Lucida"},
              {id: 3, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/003_Nick_Himmel_A_Museum_Of_Curiosities.jpg", alt: "A Museum of Curiosities"},
              {id: 4, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/004_Nick_Himmel_The_Cyclone.jpg", alt: "The_Cyclone"},
              {id: 5, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/005_Nick_Himmel_Day_Of_The_Sharks.jpg", alt: "Day_Of_The_Sharks"},
              {id: 6, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/006_Nick_Himmel_Empire_Service_Metal.jpg", alt: "Empire_Service_Metal"},
              {id: 7, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/007_Nick_Himmel_While_You_Were_Gone.jpg", alt: "While_You_Were_Gone"},
              {id: 8, src: "https://s3.us-east-2.amazonaws.com/nickhimmel.com/008_Nick_Himmel_A_Dream_Of_A_House.jpg", alt: "A_Dream_Of_A_House"}
            ]
        }
    ],
    code: [
      {
          id: "1",
          projectTitle: "Civil Media Company",
          projectSubtitle: "Freelance Front End Developer, April 2018 – present",
          projectDescriptionBold: "Technologies used: ",
          projectDescription: "Javascript, SASS, Wordpress",
          projectText: "Civil is a blockchain startup focusing on journalism. They have a custom WordPress theme for small independent newsrooms. I adapted Civil’s WordPress theme to the individual needs of 11 different newsrooms using CSS. I worked with each newsroom to learn their needs and brand and make their sites look exactly the way they wanted. I also worked with a designer on two major redesigns of Civil’s marketing site, achieving pixel-perfect results. I contributed additional features to the marketing site on an as-needed basis."
      },
      {
          id: "2",
          projectTitle: "Changing New York",
          projectSubtitle: "Personal project to further my React and Redux skills.",
          projectDescriptionBold: "Technologies used: ",
          projectDescription: "React, Redux, D3, SASS",
          projectLinks: [{id: 201, site: "site", link: "https://changing-new-york-app.herokuapp.com/"}, {id: 202, site: "github", link: "https://github.com/NickHimmel/changing-new-york-app"}],
          projectText: "This app uses my own photographs paired with Berenice Abbott’s historic photographs from the New York York Public Library Digital Collections API, along with Mapbox, to engage users in a conversation about New York’s changing waterfront. Users can click on locations on a map of New York’s waterfront to see historic photos paired with contemporary ones and read about the area’s development.",
          projectVideo: [
            "https://s3.us-east-2.amazonaws.com/nickhimmel.com/changingnewyork.mp4"
          ]
      },
      {
          id: "3",
          projectTitle: "mypolitician",
          projectSubtitle: "Personal project to further my React and Redux skills.",
          projectDescriptionBold: "Technologies used: ",
          projectDescription: "React, Redux, D3, SASS",
          projectLinks: [{id: 301, site: "site (site is currently not working)", link: "https://my-politician-app.herokuapp.com/"}, {id: 302, site: "github", link: "https://github.com/NickHimmel/my-politician-app"}],
          projectText: "This app lets people click on a district on a dynamic map of New York State to find out who their local congressman is as well as who their state representatives are. It shows the lawmakers’ financial information, their donors, which bills the lawmaker introduced, their vote history, and provides links to their social media pages. I pull this information from the ProPublica and OpenSecrets APIs.",
          projectVideo: [
            "https://s3.us-east-2.amazonaws.com/nickhimmel.com/mypolitician.mp4"
          ]
      }
    ]
};
