//import fs from 'fs';
import fs from 'fs/promises';

//readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

//readFileSync() - synchronous
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

// readFile() - promise .then()/.catch()
// fs.readFile('./test.txt', 'utf8')
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

//readFile() - async/await
const readFile = async () => {
    try {
         const data = await fs.readFile('./test.txt', 'utf8');
         console.log(data);
    }catch(error) {
        console.log(error);
    }
};

//writeFile()

const writeFile = async () =>{
    try{
        await fs.writeFile('./test.txt', 'hello, I am writing to this file');
        console.log('File written to...');
    } catch(error){
        console.log(error);
    }
};

//appendFile()
const appendFile = async () => {
    try{
        await fs.appendFile('./test.txt', '\nThis is the appended text');
        console.log('File appended to...');
    } catch(error){
        console.log(error);
    }
};

writeFile();
appendFile();
readFile();