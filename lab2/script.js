var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
    var name1 = names[i];

    if (name1.charAt(0).toLowerCase() === 'j') {
        speakGoodbye(name1);
    } else {
        speakHello(name1);
    }
}

console.log("Another selection method based on the last letter:");
for (var i = 0; i < names.length; i++) {
    var name2 = names[i];
    if (name2.charAt(name2.length - 1).toLowerCase() === 'n') {
        console.log("Hello " + name2);
    } else {
        console.log("Goodbye " + name2);
    }
}
