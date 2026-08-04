// Create a business name generator by combining
// list of adjectives and shop name and another word

/* Adjectives:
    1. Crazy
    2. Amazing
    3. Fire
*/

/* Shope Name:
    1. Engine
    2. Foods
    3. Garments
*/

/* Another Word:
    1. Bros
    2. Limited
    3. Hub
*/

const business_name_generator = (random_generate) => {
    // function business_name_generator(random_generate) {

    let obj1 = {
        1: "Crazy",
        2: "Amazing",
        3: "Fire"
    }

    let obj2 = {
        1: "Engine",
        2: "Foods",
        3: "Garments"
    }

    let obj3 = {
        1: "Bros",
        2: "Limited",
        3: "Hub"
    }

    if (random_generate === 1) {
        return (
            `business name: ${obj1[Math.floor(Math.random() * 3) + 1]} ${obj2[Math.floor(Math.random() * 3) + 1]} ${obj3[Math.floor(Math.random() * 3) + 1]}
        `)
    }

    else if (random_generate === 2) {
        return (
            `business name: ${obj1[Math.floor(Math.random() * 3) + 1]} ${obj2[Math.floor(Math.random() * 3) + 1]} ${obj3[Math.floor(Math.random() * 3) + 1]}
        `)
    }

    else if (random_generate === 3) {
        return (
            `business name: ${obj1[Math.floor(Math.random() * 3) + 1]} ${obj2[Math.floor(Math.random() * 3) + 1]} ${obj3[Math.floor(Math.random() * 3) + 1]}
        `)
    }

}

console.log(business_name_generator(Math.floor(Math.random() * 3) + 1));


/*

        Math.random() * 3:

            Possible values:

                0.36
                1.82
                2.97


        Math.floor(Math.random() * 3):

            Math.floor() removes the decimal:

                0.36 → 0
                1.82 → 1
                2.97 → 2

        Finally add 1:

            Math.floor(Math.random() * 3) + 1

            Results become:

            0 → 1
            1 → 2
            2 → 3
*/