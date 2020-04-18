const Users = require('../db_models/user.schema');
const {v1} = require('uuid');
const jwt = require('jsonwebtoken');
const config = require('config');

const tokenSecret = config.get("jwt.tokenSecret");

exports.createUser = (userData) => {
    return new Promise((resolve, reject) => {
        if (userData.name && userData.password) {
            Users.find({name: userData.name})
                .lean()
                .then((data) => {
                    if (data && data.length) {
                        reject("USER_ALREADY_EXISTS");
                    } else {
                        let newUserData = {
                            userId: v1(),
                            name: userData.name,
                            password: userData.password
                        };

                        new Users(newUserData)
                            .save()
                            .then((savedData) => {
                                resolve("NEW_USER_CREATED");
                            })
                            .catch((error) => {
                                console.error(`ERROR: ${error}`);
                                reject("INTERNAL_SERVER_ERROR");
                            })
                    }
                })
                .catch((error) => {
                    console.error(`ERROR: ${error}`);
                    reject("INTERNAL_SERVER_ERROR");
                })
        } else {
            reject("INSUFFICIENT_DATA");
        }
    })
};

exports.authenticate = (userData) => {
    return new Promise((resolve, reject) => {
        if (userData.name && userData.password) {
            Users.find({name: userData.name, password: userData.password})
                .lean()
                .then((data) => {
                    if (data && data.length) {
                        let userData = data[0];

                        let tokenObject = {
                            userId:userData.userId,
                            name:userData.name
                        };

                        const accessToken = jwt.sign(tokenObject, tokenSecret);

                        resolve(accessToken);
                    } else {
                        reject("AUTHENTICATION_FAILURE");
                    }
                })
                .catch((error) => {
                    console.error(`ERROR: ${error}`);
                    reject("INTERNAL_SERVER_ERROR");
                })
        } else {
            reject("INSUFFICIENT_DATA");
        }
    })
};