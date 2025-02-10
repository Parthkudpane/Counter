// rafce for below shortcutkey = fullform (rafce)):- reactArrowFunctionExportComponent  

const SingleFunctionForm = () => {
    function getInput(e) {
        console.log(e.target.name)
        console.log(e.target.value)
        const name = e.target.name;
        const value = e.target.value;

        //when you want variable's value pass as a key in object then assign {[variable_name]:value}   
        const user= {
            [name]:value
        }
        console.log(user)

        // console.log(e.target.type)
        // console.log(e.target.placeholder)

    }
    return (
        <>
            <form className="col-lg-6 mx-auto my-5 p-5 shadow" method="post">
                <div className="mt-4">
                    <input type="text" name="username" onChange={(e)=>getInput(e)} className="form-control" placeholder="enter username" />
                </div>
                <div className="mt-4">
                    <input type="text" name="mobile" onChange={(e)=>getInput(e)} className="form-control" placeholder="enter mobile number" />
                </div>
                <div className="mt-5">
                    <button className="btn btn-outline-success">Submit</button>
                </div>
            </form>
        </>

    )
}

export default SingleFunctionForm