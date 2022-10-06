const fetch = require('node-fetch');

const login = async ()=>{
const tokenResponse = await fetch('https://dev.stedi.me/login%27,%7B
    method: 'POST',
    body:JSON.stringify({
        userName: "rom19010@byui.edu",
        password:"Patricia2596@"
        })
})
};
export {login};