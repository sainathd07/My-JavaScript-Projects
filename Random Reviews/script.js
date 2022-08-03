const reviews = [
  {
    id : "Susan Smith",
    role : "WEB DEVELOPER",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius architecto sed perspiciatis saepe? Neque voluptatibus sint incidunt explicabo quis quidem nisi qui alias eum voluptas!",
  },
  {
    id : "Harry Peter",
    role : "WEB DESIGNER",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa repudiandae corporis eaque! Dicta saepe nam illo nostrum sed soluta cum doloremque id, natus ex cupiditate?",
  },
  {
    id : "John Hill",
    role : "ANDROID DEVELOPER",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium ex dolorum. Laboriosam autem cumque odit obcaecati consequatur, nisi blanditiis pariatur numquam ut voluptates eveniet! Similique, autem molestiae.",
  },
  {
    id : "Sundar Neil",
    role : "GRAPHIC DESIGNER",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi atque reiciendis ea ex, quae tempore officiis saepe magni illo accusantium? Dolores quidem amet nostrum similique, rem, cum molestiae reprehenderit dolor magni maiores non?",
  },
]

const personName = document.querySelector("name");
const personRole = document.querySelector("role");
const personDescription = document.querySelector("describe");

const prevArrow = document.querySelector("#prev");
const nextArrow = document.querySelector("#next");

const supriseBtn = document.querySelector("#suprise-btn");

prevArrow.addEventListener("click",prev);

function prev () {
  
}

console.log(Math.floor(Math.random() * reviews.length))