


//     Dashboard 
let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
console.log(total,interviewCount,rejectedCount);

//  Sections 
const allCardSection = document.getElementById('allCards');

//    Update Available Jobs count 
function calculateCount(){
    total.innerText = allCardSection.children.length;
   
}

 calculateCount();



