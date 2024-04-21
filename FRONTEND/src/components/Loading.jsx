
export default function Loading(props){
    
    return (
        <div id={props.load ? "loading" : "loading-none"}>
            <img src="dq_logo.png" alt="" />
        </div>
    )
}