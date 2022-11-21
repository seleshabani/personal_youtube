import { gapi, loadAuth2 } from 'gapi-script';

const setAuth2 = async (attachSignIn)=>{
    const auth2 = await loadAuth2(gapi,clientId,'https://www.googleapis.com/auth/youtube');
    attachSignIn(document.getElementById('gapi_btn'),auth2) 
}