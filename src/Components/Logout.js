import { Button } from "@material-ui/core";
import GoogleLogin from "react-google-login";

const Logout = (props) => {

    const clientId = "576395696573-8fole69rfr5pr0221rs4a3v7m2v101ug.apps.googleusercontent.com"


    const onSuccess = (res) => {
        // console.log('Login Success: currentUser:', res.profileObj);
        // alert(
        //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );
        // refreshTokenSetup(res);
        props.logout(res);
      };
    
      const onFailure = (res) => {
        console.log('Logout failed: res:', res);
        alert(
          `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        );
      };

    return (
        <Button onClick = {onSuccess}>Logout</Button>
       
      
    )

}
export default Logout;