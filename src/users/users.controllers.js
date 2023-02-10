const usersDB = [{     
        id:1,
        firstName: "Sahid",
        lastName: "kick",
        email: "sahid.kick@academlo.com",
        password: "root",
        age: 22
    },
    {     
        id:2,
        firstName: "Edgar",
        lastName: "Macedo",
        email: "Edgar.macedo@academlo.com",
        password: "asdd",
        age: 25
    }
] 

let baseid = 2 

const findAllUsers = async () => {
    return await usersDB
}

const findUserById = async (id) => {
    const foundUser = await usersDB.find(user => user.id === id ) 
    
    return foundUser
}

const createNewUser = async (userObj) => {
    const newUser = {
        id: baseid++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age
    }

    await usersDB.push(newUser)
    return newUser
}

module.exports = {
    findAllUsers,
    findUserById,
    createNewUser
}