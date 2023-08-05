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

const li = document.createElement('li');
// console.log(li);
li.innerText="Nav Item Created by js"

