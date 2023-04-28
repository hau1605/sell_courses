import React from "react";
import { GoogleLogin} from 'react-google-login';
const clientId = '42434253190-q259erf46iqub7ne702ftaqs2q80v2r8.apps.googleusercontent.com';


const GoogleLoginButton = () => {
    // const refreshTokenSetup = (res) => {
    //     let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 *60) * 1000;
    
    //     const refreshToken = async () => {
    //         const newAuthRes = await res.reloadAuthResponse();
    //         refreshTiming = (newAuthRes.expires_in || 3600 - 5 *60) * 1000;
    //         console.log('newAuthRes: ', newAuthRes);
    //         console.log('new auth Token: ', newAuthRes.id_token);
    //         setTimeout(refreshToken, refreshTiming);
    //     }
    //     setTimeout(refreshToken, refreshTiming);
    // }
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser: ', res.profileObj);
        // refreshTokenSetup(res);
    }
    const onFailure = (res) => {
        console.log('[Login failed] res: ', res);
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default GoogleLoginButton;