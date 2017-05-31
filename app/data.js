function numberVotes(){
    return Math.floor((Math.random()*50)+15);
}

const children=[
    {
        id:1,
        firstName:"First name: Lolo",
        lastName:"Last name: lulu",
        gender:"Gender: female",
        img:'https://static-s.aa-cdn.net/img/gp/20600004409342/ExXIgVUk4jYcK7aGUv9U3op4E9avSiQjGcdvUXCNXqkf1MwXCGxuw5QsoCS2F9T3Tlc=w300?v=1',
        votes:numberVotes(),
        // toysNum:1
    },
    {
        id:2,
        firstName:"First name: Lola",
        lastName:"Last name: perez",
        gender:"Gender: male",
        img:"https://lh3.googleusercontent.com/-UvNSMHQP-Bc/AAAAAAAAAAI/AAAAAAAAABc/bNB0L90J8G4/s640/photo.jpg",
        votes:numberVotes(),
        // toysNum:4
    },
    {
        id:3,
        firstName:"First name: Pepito",
        lastName:"Last name: perez",
        gender:"Gender: male",
        img:"https://is2-ssl.mzstatic.com/image/thumb/Purple49/v4/29/b7/22/29b722a5-e528-7523-ddec-a7291bf6fc6f/source/256x256bb.jpg",
        votes:numberVotes(),
        // toysNum:5
    }
];
export{children,numberVotes};
