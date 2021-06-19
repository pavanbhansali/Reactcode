import GoogleLogin from "react-google-login"

const Login = (props) => {

const clientId = "520083617994-5rco2nt009npo0ltgi3551auchb3gbsu.apps.googleusercontent.com";

    const onSuccess = (res) => {
        // console.log('Login Success: currentUser:', res.profileObj);
        // alert(
        //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        // refreshTokenSetup(res);
        props.login(res);
      };
    
      const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
      };

    return (
        <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    )
}
export default Login;