const peoples= [
    {
        name : 'Wes',
        year : 1988
    },{
        name : 'Kait',
        year : 1986
    },{
        name : 'Irv',
        year : 1970
    },{
        name : 'Lux',
        year : 2015
    }
]
const comments = [{
    text: 'Love this!',
    id: 523423
    },{
        text: 'Super good',
        id: 823423
    },{
        text : 'yo are the best',
        id: 2039842
    },{
        text : 'Ramen is my fav food ever',
        id: 123523
    },{
        text : 'Nice Nice Nice!',
        id: 542328
    }
]



/* The some() method is an array method that tests whether at least one element in the array
   passes the test implemented by the provided function
*/
const isAdult = peoples.some((people) => {
    const currentYear = new Date().getFullYear()
    return currentYear - people.year >= 19
})
console.log(isAdult);


/*The every() method tests whether all elements in an array pass the test implemented by the provided function.
  It returns a Boolean value.
*/
const allAdult = peoples.every(people => {
    const currentYear = new Date().getFullYear()
    return currentYear - people.year >= 19
})
console.log(allAdult);



/* The find() method returns the first element in an array that satisfies a provided testing function. 
  If no elements satisfy the testing function, undefined is returned.
*/
const comment = comments.find(comment => {
    return comment.id === 823423
})
console.log(comment);



/* Returns the index of the first element in the array 
   that satisfies the provided testing function
*/
const index = comments.findIndex((comment) => {
    return comment.id === 823423
})
console.log(index);





// show the people array in html
const displayPeoples = function () {
    // let html = ''
    // for (const people of peoples) {
    //     let htmlElement = `
    //     <p> name : ${people.name} , year : ${people.year}</p>
    //     `
    //     html += htmlElement
    // }
    // document.querySelector('.show-peoples').innerHTML = html
    const html = peoples.map(people => `
        <p> name : ${people.name} , year : ${people.year}</p>
        `).join(' ')
    document.querySelector('.show-peoples').innerHTML = html
}





// show the comments array in html
const displayComments = function () {
    const html = comments.map((comment) => `
        <p> text : ${comment.text} , id : ${comment.id}</p>
        `
    ).join(' ')
    document.querySelector('.show-comments').innerHTML = html
}


// Function to display both peoples and comments
const displayAll = function () {
    displayPeoples();
    displayComments();
}

// Call displayAll when the window loads
window.onload = displayAll;



















