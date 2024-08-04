import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        
        <div>
            <h2>Oops! Page Not Found</h2>
        </div>
    )
}
export default Error;