var userCollection = require('../views/config/userCollection')
const bcrypt = require('bcrypt');


var data = userCollection.userid

module.exports={

  doLogin:(userData)=>{
     return new Promise(async(resolve, reject) => {
        //userCollection.userid.password = await bcrypt.hash(userCollection.userid.password,10)
   
        if(data.email == userData.email){
           bcrypt.compare(userData.password, userCollection.userid.password).then((loginTrue)=>{
              let response={}
              if(loginTrue){
                 console.log('login successful');
                 response.user=data;
                 response.status=true;
                 response.time=new Date;
                 resolve(response);
              }else{
                 console.log("login failed");
                 resolve({status:false});
              }
           })
        }else{
           console.log('Login failed email');
            resolve({status:false});
        }
        
     })
}
}
