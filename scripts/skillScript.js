$(function() {
  

  const games = [
      {
        title: "Front End",
        link: "https://frontendmasters.com/books/front-end-handbook/2018/what-is-a-FD.html", 
        author: "Jalen Watts"
      },
      {
        title: "Back End",
        link: "https://bootcamp.cvn.columbia.edu/blog/back-end-developer-skills/", 
        author: "Jalen Watts"
      },
      {
      title: "Full Stack",
      link: "https://hackernoon.com/6-essential-tips-on-how-to-become-a-full-stack-developer-1d10965aaead",
      author: "Jalen Watts"
      },
      {
      title: "Mobile",
      link: "https://careerkarma.com/careers/mobile-development/",
      author: "Jalen Watts"
      },
      {
      title: "Data Scientist",
      link: "https://www.kdnuggets.com/2018/05/simplilearn-9-must-have-skills-data-scientist.html",
      author: "Jalen Watts"
      },
      {
      title: "DevOps",
      link: "https://devopscube.com/become-devops-engineer/",
      author: "Jalen Watts"
      },
      {
      title: "Software",
      link: "https://builtin.com/software-engineering-perspectives/how-to-become-a-software-engineer",
      author: "Jalen Watts"
      }
        ];

  // iterate over the JSON array
  $.each(games, function (index, item) {
    console.log("Title: " + item.title);
    console.log("URL: " + item.link);
    console.log("Writer: " + item.author);
  
    // create a brand new HTML element JUST with code
  
  var el = `<div class='card text-center mx-auto bg-dark blue' style="width: 200px"> \
    <button class='cardOpen2 btn btn-outline-info'> ${ item.title } </button> \
     <div class='cardHide'> \
         <br> \
         <a href="${ item.link }" target="_blank" class="link-info" >Link</a> \
         <p class="text-white">Create by: ${ item.author } </p> \
         <br> \
         <button class='btn btn-outline-info cardClose2'>Close</button> \
     </div>
   </div>`; 
  
   console.log(el);  
  
  $('#firstCard').append(el);
  
  
  
  });
  
  
  });