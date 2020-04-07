const app = require('./app');
import {startConection} from './database'

//app.listen(4000, ()=> {
  // console.log('Server on port', 4000)
//});


async function main(){
    startConection();
    await app.listen(app.get('port'));
    console.log('server on port', app.get('port'));
}

main();