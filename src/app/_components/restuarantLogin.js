export default function RestuarantLogin(){
    return(
        <div>
             <h1>This is Login Page</h1>
              <form>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter your email id" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter you password" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <button className="button">Login</button>
                </div>
             </form>
        </div>
    )

}