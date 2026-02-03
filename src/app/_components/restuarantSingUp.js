export default function RestuaranSingUp(){
    return(
        <div>
              <h1>This is SingUp Page</h1>
              <form>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter your email id" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter your password" className="input-field"/>
                </div>
                 <div className="input-wrapper">
                    <input type="password" placeholder="Enter your confirm password" className="input-field"/>
                </div>
                 <div className="input-wrapper">
                    <input type="password" placeholder="Enter your resturant name" className="input-field"/>
                </div>
                 <div className="input-wrapper">
                    <input type="password" placeholder="Enter city" className="input-field"/>
                </div>
                 <div className="input-wrapper">
                    <input type="password" placeholder="Enter full address" className="input-field"/>
                </div>
                 <div className="input-wrapper">
                    <input type="password" placeholder="Enter contact number" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <button className="button">Sing Up</button>
                </div>
             </form>
        </div>
    )

}