import fetch from 'node-fetch';
const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.cayson.cit262.com/login',{
        method: 'POST',
        body:JSON.stringify({
          userName: 'notrealemail@gmail.com',
          password:'P@ssw0rd'
        })
    })
  return tokenResponse;
};
export default login;