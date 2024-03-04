import { config } from 'dotenv';
config({path: '.env3'})
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function insertUser(username: string, password: string, firstname: string, lastname: string) {
 const res = await prisma.user.create({
    data:{
        email: username,
        password,
        firstname,
        lastname
    },
    select:{
        id: true,
        password:true
    }
  })
  console.log(res);
}

//insertUser('test.nair26@gmail.com','testpassword','test','nair')
interface UpdateParams {
    firstname: string,
    lastname: string
}
async function updateUser(username: string, {
    firstname, lastname
}: UpdateParams ) {
  const res = await prisma.user.update({
    where: {email:username},
    data: {
        firstname,
        lastname
    }
  })
}

// updateUser('anjali.nair26@gmail.com',{
//     firstname:'nair',
//     lastname:'anjali'
// });

async function getUser(useremail:string) {
    const user = await prisma.user.findFirst({
        where: {
            email: useremail
        }
    })
    console.log(user);
}

getUser('sumit.nair26@gmail.com');

async function  deleUser(userEmail:string) {
    console.log(userEmail);
    const res = await prisma.user.delete({
        where: {
            email:userEmail
        }
    });
    if (res) {
        console.log('User deleted succesfully');
    } else {
        console.log('Something Went wrong');
    }
}

//deleUser('test.nair26@gmail.com');