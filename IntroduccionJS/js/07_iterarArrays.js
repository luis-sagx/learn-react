const tech = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

for(let i = 0; i < tech.length; i++){
    console.log(tech[i])
}


///////////////////////////
console.log("For Each:")

tech.forEach((item) => {
    console.log(item)
})

/////////////////////////////
console.log("Map:")

const mappedTech = tech.map((item) => {
    return item
})

console.log(mappedTech)

////////////////////////////
console.log("For Of:")

for (let item of tech) {
    console.log(item)
}
