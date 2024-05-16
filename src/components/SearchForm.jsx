import React,{useState} from "react";



let Search =({onSubmit}) =>{

    let[keywords, setKeywords] = useState('');

   let handleSubmit=(e) =>{
    e.preventDefault();
    onSubmit(keywords);
   }



    return(

        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                    <input type="text"
                    
            value={keywords}
            className="form-control shadow mb-4"
            onChange={(e)=> setKeywords(e.target.value)}
        placeholder="Enter keywords..." />
        <button type="submit" className="btn btn-primary mb-4 btn-sm">Search</button>
                    </div>
            
        </form>
                </div>
            </div>
        </div>
        
    )
}

export default Search;