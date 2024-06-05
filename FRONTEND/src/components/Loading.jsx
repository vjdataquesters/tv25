
export default function Loading(props){
    
    return (
        <div className="loading" id={props.load ? "loading" : "loading-none"}>
            <img src="dq_logo.png" alt="" />
        </div>
    )
}