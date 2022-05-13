/*
 * Create person object from email
 */

const capitalize = (text) => {
    return text.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

// function createPersonFromEmail(email) {
//     const splittableEmail = email.replace('@', '.');
//     const emailArray = splittableEmail.split('.');
//
//     return {
//         email: email,
//         firstName: capitalize(emailArray[0]),
//         lastName: capitalize(emailArray[1]),
//         departments: [emailArray[2].toUpperCase()],
//     }
// }

// const person = createPersonFromEmail(email);

/*
 * Solution
 */

const emails = [
    'nicolas.dupont-aignant.a_b_c@gmail.com',
    'sardine.ruisseau.a_d@live.fr',
    'fabieng.roussel.b_c@apero.fr'
]

const createPersonFromEmail = (email) => {
    let infos = email.split('@')[0].split('.');
    let departments = infos[2].toLocaleUpperCase().split('_');

    return {
        email,
        firstname: capitalize(infos[0]),
        lastName: capitalize(infos[1]),
        departments
    }
}

let persons = [];
emails.forEach(email => persons.push(createPersonFromEmail(email)))
console.log(persons);