// console.log(document);

// const student={name: "tufan", roll: 1, className:"ten"};
// console.log(student.name);


// console.log(typeof document);

// const title=(document.getElementsByTagName('h3'));

// for (const h3 of title){
//     console.log(h3.innerText);
// }

// const paragraph=document.getElementsByTagName('p');
// console.log(paragraph);
// for(const p of paragraph){
//     console.log(p.innerText);
// }

// const secondTitle=document.querySelector(".second_title");
// console.log(secondTitle);
// const secondTitle=document.getElementsByClassName("second_title");
// console.log(secondTitle);


// const lastTitle=document.getElementById("Last_title");
// console.log(lastTitle);



const li = document.createElement('li');
li.innerText="Nav Item Created by js"
// console.log(li);
const ul =document.querySelector('ul');
// console.log(ul);
ul.appendChild(li);


const article=document.createElement('article');
// console.log(article);
article.classList.add('blog');
const h3Title=document.createElement('h3');
// console.log(h3Title);
h3Title.innerText="Our New Awesome Article - 5";
// console.log(h3Title);
const pDescription=document.createElement('p');
pDescription.innerHTML=`<span>Our New Awesome Article - 1</span>`
// console.log(pDescription);

// console.log(article);
article.appendChild(h3Title);
article.appendChild(pDescription);
// console.log(article);
const section=document.querySelector('section');
section.appendChild(article)



const blogs=document.getElementsByClassName('blog');
// console.log(blogs);

for(const blog of blogs){
    // console.log(blog);

    blog.style.border="2px solid green";
    blog.style.borderRadius="2rem"
    blog.style.margin="2rem";
    blog.style.padding="2rem";
}


// console.log(document.querySelectorAll('.blog'));

const firstTitle=document.querySelector('h3');
// console.log(firstTitle);
firstTitle.style.backgroundColor="red";

const description=document.querySelectorAll('p');
// console.log(description);

for (const blogDetails of description){
    // console.log(blogDetails);
    blogDetails.style.backgroundColor="black";
    blogDetails.style.color="white";
}


function change(){
    document.querySelector('h2').style.backgroundColor="red";
    document.querySelector('h2').style.color='green';
}
