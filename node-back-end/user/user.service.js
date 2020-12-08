const db = require('helper/db');

module.exports = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ userName, password }) {
    const user = await db.User.findOne({ where: { userName } });

    if (!user || user.password.localeCompare(password) != 0)
        throw 'userName or password is incorrect';

    // authentication successful
    return user.get();
}

async function getAll() {
    return await db.User.findAll();
}

async function getById(id) {
    return await getUser(id);
}

async function create(params) {
    // validate
    if (await db.User.findOne({ where: { userName: params.userName } })) {
        throw 'userName "' + params.userName + '" is already taken';
    }

    // save user
    await db.User.create(params);
}

async function update(id, params) {
    const user = await getUser(id);

    // validate
    const userNameChanged = params.userName && user.userName !== params.userName;
    if (userNameChanged && await db.User.findOne({ where: { userName: params.userName } })) {
        throw 'userName "' + params.userName + '" is already taken';
    }

    // copy params to user and save
    Object.assign(user, params);
    await user.save();

    return user.get();
}

async function _delete(id) {
    const user = await getUser(id);
    await user.destroy();
}

// helper functions

async function getUser(id) {
    const user = await db.User.findByPk(id);
    if (!user) throw 'User not found';
    return user;
}