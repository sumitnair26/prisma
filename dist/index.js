"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: '.env3' });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                password,
                firstname,
                lastname
            },
            select: {
                id: true,
                password: true
            }
        });
        console.log(res);
    });
}
function updateUser(username, { firstname, lastname }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstname,
                lastname
            }
        });
    });
}
// updateUser('anjali.nair26@gmail.com',{
//     firstname:'nair',
//     lastname:'anjali'
// });
function getUser(useremail) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.findFirst({
            where: {
                email: useremail
            }
        });
        console.log('get users', user);
    });
}
getUser('sumit.nair26@gmail.com');
function deleUser(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(userEmail);
        const res = yield prisma.user.delete({
            where: {
                email: userEmail
            }
        });
        if (res) {
            console.log('User deleted succesfully');
        }
        else {
            console.log('Something Went wrong');
        }
    });
}
//deleUser('test.nair26@gmail.com');
function createTodo(title, description, userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title: title,
                description: description,
                userId: userId
            }
        });
        console.log("Added Succesfully");
    });
}
//createTodo("Morning ToDo", "Will go for walk and ontime breakfast",1);
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                id: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                user: true
            }
        });
        console.log('get todo', res);
    });
}
getTodos(1);
