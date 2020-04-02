import mongose from 'mongoose';

 export async function startConection(){
 await  mongose.connect('mongodb+srv://photo:22985032@photo-database-f81kt.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useFindAndModify: false
    });

    console.log('Database in connected');

}

//export default startConection;