import RestuarantLogin from "../_components/restuarantLogin";
import RestuaranSingUp from "../_components/restuarantSingUp";

export default function Restuarant (){

    return(
        <div>
            <h1> This is Restuarant Login/SingUp Page</h1>
            <RestuarantLogin/>
            <RestuaranSingUp/>
            <button>Already have an Account? SingUp</button>
        </div>
    )
}