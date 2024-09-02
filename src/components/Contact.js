const Contact=()=>{
    return(
        <div className="mx-auto text-center m-4 p-4">
            <h1 className="font-bold">Contact Page</h1>
            <form>
                <input className="p-2 m-2 border border-black" placeholder="name"></input>
                <input className="p-2 m-2 border border-black" placeholder="message"></input>
                <button className="rounded-lg p-2 m-2 border border-black">Submit</button>
            </form>
        </div>
    )
}
export default Contact;