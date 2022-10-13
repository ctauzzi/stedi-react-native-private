import login from './login.js'
Item('should login', async ()=>{
    let tokenResponse = await login()
    const tokenStatus = tokenResponse.status;
    console.log('Status', tokenStatus)
    console.log(JSON.stringify(tokenResponse));
});