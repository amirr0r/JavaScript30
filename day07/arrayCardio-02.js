// ## Array Cardio Day 2

    const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    const isAdult = person => (new Date().getFullYear()) - person.year > 19
    console.log(people.some(isAdult))
    // Array.prototype.every() // is everyone 19 or older?
    console.log(people.every(isAdult))
    // Array.prototype.find() //
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const idIs = id => comments.find(c => c.id === id)
    console.log(idIs(823423))
    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    // console.log(comments.indexOf(idIs(823423)))
    
    // method-1 but I'm not fan because of <1 empty item>
    // delete comments[comments.findIndex(c => c.id === 823423)]
    const i = comments.findIndex(c => c.id === 823423)
    // method-2 why not ?
    const newComments = [
      ...comments.slice(0, i),
      ...comments.slice(i+1)
    ]
    console.log(newComments)
    // method-3 my favorite
    comments.splice(i, i)
    console.log(comments)
