//HOC
//HOC Is just a function which takes the component as parameters and return the same component with some modified attributes.

const WithStyle = (WrappedComp) => {

const styleObj = {
    'color': 'blue'
}
    return (props)=> {
        return(
            <WrappedComp {...props} styleobj = {styleObj} />
        )
    }

}
export default WithStyle;