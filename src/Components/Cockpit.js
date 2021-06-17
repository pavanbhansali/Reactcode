import { withRouter } from "react-router";

const Cockpit = (props) => {
    console.log('cockpit props--',props);
    // navigateHandler = ()=> {
    //     props.history.replace('/')
    // }
    return (
        <div>
            Cockpit
            <button >Go Back</button>
        </div>
    )
}

export default withRouter(Cockpit);