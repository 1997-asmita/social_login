import React, {useState } from "react";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { Navigate } from "react-router-dom";
import PostData from "./PostData";

const Welcome = () => {

    const [data, allData] = useState({
        loginError: false,
        redirect: false
    });

    const signup = (res, type) => {
        let postDatas = "";
        if (type === 'facebook' && res.email) {
            postDatas = {
                name: res.name,
                provider: type,
                email: res.email,
                provider_id: res.id,
                token: res.accessToken,
                provider_pic: res.picture.data.url
            };
        }
        if (type === 'google' && res.w3.U3) {
            postDatas = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
        }

        if (postDatas) {
            PostData('signup', postDatas).then((result) => {
                const responseJson = result;
                sessionStorage.setItem("userData", JSON.stringify(responseJson));
                allData({ redirect: true })
            });
        } else { }
    }

    if (data.redirect || sessionStorage.getItem("userData")) {
        return (<Navigate to={'/home'} />)
    }
    const responseFacebook = (response) => {
        console.log("facebook console");
        console.log(response);
        signup(response, 'facebook');
    }
    const responseGoogle = (response) => {
        console.log("google console");
        console.log(response);
        signup(response, 'google');
    }

    return (
        <>
            <div className="row body">
                <div className="medium-12 columns">
                    <div className="medium-12 columns">
                        <h2 id="welcomeText"></h2>

                        <ReactFacebookLogin
                            appId="Your FacebookAPP ID"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook} />

                        <br /><br />

                        <GoogleLogin
                            clientId="Your Google ID"
                            buttonText="Login with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Welcome;