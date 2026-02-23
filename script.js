let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


// Dashboard
let total = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
//console.log(total,interviewCount,rejectedCount);


// Filter buttons
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


// Sections
const allCardSection = document.getElementById('allCards');
//console.log(allcardSection.childen.length);
const mainContainer = document.querySelector('main');
// console.log(mainContainer);
const filterSection = document.getElementById('filtered-section');
const noJobsSection = document.querySelector('.empty-card');
const availableJobsCounter = document.querySelector('.flex.justify-between p.text-sm.text-gray-500');





// Update Available Jobs count

function calculateCount(){
total.innerText = allCardSection.children.length;
interviewCount.innerText = interviewList.length;
rejectedCount.innerText = rejectedList.length;
}
calculateCount();


// Toggle Filter Style

function toggleStyle(id) {
// console.log("click")
allFilterBtn.classList.add('bg-gray-300');
interviewFilterBtn.classList.add('bg-gray-300');
rejectedFilterBtn.classList.add('bg-gray-300');

allFilterBtn.classList.remove('bg-blue-600', 'text-white');
interviewFilterBtn.classList.remove('bg-blue-600', 'text-white');
rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white');

const selected = document.getElementById(id);
currentStatus = id;
// console.log(currentStatus);
// console.log(selected);
selected.classList.remove('bg-gray-300');
selected.classList.add('bg-blue-600', 'text-white');

if (id === 'interview-filter-btn') {
allCardSection.classList.add('hidden');
filterSection.classList.remove('hidden');
renderInterview();
} else if (id === 'rejected-filter-btn') {
allCardSection.classList.add('hidden');
filterSection.classList.remove('hidden');
renderRejected();
} else {
allCardSection.classList.remove('hidden');
filterSection.classList.add('hidden');
noJobsSection.style.display = 'none';
}


calculateCount();
}



// Event Delegation
mainContainer.addEventListener('click', function (event) {
if (event.target.innerText === 'INTERVIEW') {
const card = event.target.closest('.card');
const statusSpan = card.querySelector('span');
statusSpan.innerText = 'INTERVIEW';
statusSpan.classList.remove('bg-gray-100', 'text-red-600');
statusSpan.classList.add('bg-green-100', 'text-green-600');

const jobTitle = card.querySelector('h3').innerText;
if (!interviewList.includes(jobTitle)) interviewList.push(jobTitle);
rejectedList = rejectedList.filter(j => j !== jobTitle);

if (currentStatus === 'rejected-filter-btn') renderRejected();
if (currentStatus === 'interview-filter-btn') renderInterview();

calculateCount();
}

if (event.target.innerText === 'REJECTED') {
const card = event.target.closest('.card');
const statusSpan = card.querySelector('span');
statusSpan.innerText = 'REJECTED';
statusSpan.classList.remove('bg-gray-100', 'text-green-600');
statusSpan.classList.add('bg-red-100', 'text-red-600');

const jobTitle = card.querySelector('h3').innerText;
if (!rejectedList.includes(jobTitle)) rejectedList.push(jobTitle);
interviewList = interviewList.filter(j => j !== jobTitle);

if (currentStatus === 'interview-filter-btn') renderInterview();
if (currentStatus === 'rejected-filter-btn') renderRejected();


calculateCount();
}

});


//===== Step 3: Render Interview =====
function renderInterview() {
filterSection.innerHTML = '';
if (interviewList.length === 0) {
noJobsSection.style.display = 'block';
} else {
noJobsSection.style.display = 'none';
interviewList.forEach(title => {
const card = [...allCardSection.children].find(c => c.querySelector('h3').innerText === title);
if (card) filterSection.appendChild(card.cloneNode(true));
});
}
calculateCount();
}
//   Render Rejected
function renderRejected() {
filterSection.innerHTML = '';
if (rejectedList.length === 0) {
noJobsSection.style.display = 'block';
} else {
noJobsSection.style.display = 'none';
rejectedList.forEach(title => {
const card = [...allCardSection.children].find(c => c.querySelector('h3').innerText === title);
if (card) filterSection.appendChild(card.cloneNode(true));
});
}
calculateCount();
}

calculateCount();