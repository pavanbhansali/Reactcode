import GoogleLogin from "react-google-login"

const Login = (props) => {

    const clientId = "576395696573-8fole69rfr5pr0221rs4a3v7m2v101ug.apps.googleusercontent.com"


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
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={false}
      />
    )
}
export default Login;