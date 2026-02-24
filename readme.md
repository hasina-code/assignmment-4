## **Answers to Questions**

## 1. Difference between getElementById, getElementsByClassName, querySelector / querySelectorAll

# getElementById:

1. Selects a single element in the DOM that has the specified id attribute.

2. Always returns one element.

3. Returns null if no element with that id exists.

4. The id must be unique within the page.

5. It is the fastest method for DOM selection.

6. Use it to directly access an element to change style or content.

# getElementsByClassName:

1.  Selects all elements in the DOM that have a specific class.

2.  Returns an HTMLCollection, which is an array-like object.

3.  It is live, meaning if the DOM changes, the collection updates automatically.

4.  Access multiple elements using an index: [0], [1], etc.

5.  Can select multiple elements at once.

6.  Use it when you want to apply styles or event listeners to multiple elements.

# querySelector:

1.  Uses a CSS selector to select the first matching element in the DOM.

2.  Returns one element.

3.  Returns null if no match is found.

4.  The selector can be an id (#title), class (.text), tag (p), or nested selector (.box p).

5.  Very flexible, because all types of CSS selectors can be used.

6.  Use it to quickly access any element on the page.

# querySelectorAll:

1. Uses a CSS selector to select all matching elements in the DOM.

2. Returns a NodeList, which is an array-like object.

3. The NodeList is static, so it does not update automatically if the DOM changes.

4. Access all elements using forEach or a loop.

5. You can use id, class, tag, or nested selectors.

6. Use it when you want to apply styles, text, or event listeners to all matching elements.

## 2. How to Create and Insert a New Element in the DOM

1. Create a new element:

let div = document.createElement("div");

2. Add text/content:

div.innerText = "New Job";

3.  Add class or attributes:

div.classList.add("job-card");

4.  Insert into the DOM:

document.getElementById("allCards").appendChild(div);

## 3. What is Event Bubbling and How It Works

Event Bubbling is a process where an event starts from the target element and moves upward to its parent elements.
Example: Button → div → body.

document.querySelector(".child").addEventListener("click", () => console.log("Child clicked"));
document.querySelector(".parent").addEventListener("click", () => console.log("Parent clicked"));

## 4. What is Event Delegation and Why Is It Useful

Event Delegation means attaching a single event listener to a parent element to handle events for its child elements.

# Advantages:

1. Uses less memory
2. Works for dynamically added elements
3. Keeps code clean and efficient

document.getElementById("allCards").addEventListener("click", (e) => {
if (e.target.classList.contains("delete-btn")) {
e.target.closest(".card").remove();
}
});

## 5. Difference between preventDefault() and stopPropagation()

# preventDefault()

1. Prevents the browser’s default behavior
   Example: stops form submission or link navigation

document.querySelector("a").addEventListener("click", e => {
e.preventDefault();
});

# stopPropagation()

1. Stops the event from bubbling up to parent elements

document.querySelector(".child").addEventListener("click", e => {
e.stopPropagation();
});
