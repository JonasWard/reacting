// const person: {
//     name: string,
//     age: number
// }={

enum Role {ADMIN = 0, READ_ONLY = 1, AUTHOR = 2}

const person : {
    name: string,           // string
    age: number,            // number
    hobbies: string[],      // array
    role: [number, string], // typle
    enumRole: Role
}={
    name: "jonas",
    age: 29,
    hobbies: ["coding", "beer", "thee"],
    role: [2, 'author'],
    enumRole: Role.ADMIN
};

person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[]; // can use any type to have lists wiht all types of objects
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}
console.log(person.name);