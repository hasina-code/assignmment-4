
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


//     Dashboard 
let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
console.log(total,interviewCount,rejectedCount);



//  Sections 
const allCardSection = document.getElementById('allCards');
//console.log(allcardSection.childen.length);
const mainContainer = document.querySelector('main');
// console.log(mainContainer);
    

//     Filter buttons 
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

//    Update Available Jobs count 

function calculateCount(){
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

    
}

 calculateCount();



 //    Toggle Filter Style 
 
function toggleStyle(id) {
    console.log("click")
    allFilterBtn.classList.add('bg-gray-300');
    interviewFilterBtn.classList.add('bg-gray-300');
    rejectedFilterBtn.classList.add('bg-gray-300');

    allFilterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white');

    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-gray-300');
    selected.classList.add('bg-blue-600', 'text-white');

    calculateCount();
}
