import React,{useState} from "react";
import './App.css';
import Search from "./components/SearchForm";
import ImageList from "./components/imageList"


let AccessKey =  process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
let Api_url = 'https://api.unsplash.com/search/photos';





function App() {

let [images, setImages]  = useState([]);



let handleSubmit = async(keywords) => {
  try{
    let response = await fetch(`${Api_url}?query=${keywords}&client_id=${AccessKey}`)
   
    let data = await response.json();
    setImages(data.results)
  }
  catch (error) {
      console.error('Error fetching images:', error);
    
  }

}



  return(
<div className="container-fluid  body">
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '3rem', color: '#007bff', textAlign: 'start', marginBottom: '2rem', marginTop: '2rem' }} className=" text-center mb-4">Pic<span className="text-danger">Q</span>uest</h1>
      <h6 style={{ textAlign: 'center' }}>One stop for all the images you need</h6>
      <hr/>
      <div style={{ textAlign: 'right' }}>By: Thippesh</div> 
      <Search onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>

    
  )
   
  
}

export default App;
