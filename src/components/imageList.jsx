import React,{useState, useEffect} from "react";


let ImageList=({images, hasSearched }) => {
    const [noResults, setNoResults] = useState(false);

        useEffect(() => {
    
            if (images.length === 0   && hasSearched) {
              setNoResults(true);
            } else {
              setNoResults(false);
            }
          }, [images, hasSearched]);
        
          return (
            <div className="row">
              {noResults ? (
                <div className="col-md-12 mt-3">
                <div className="card mb-3">
                  <div className="card-body">
                    <p className="card-text text-center">
                      Couldn't find what you are searching for. Please make sure you are entering proper keywords and try again.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              images.map((image, index) => (
                <div key={index} className="col-md-4 mb-3 mt-3">
                  <div className="card shadow">
                    <img src={image.urls.regular} className="card-img-top" alt={`Image ${index}`} />
                    <div className="card-body d-flex justify-content-center">
                      <p className="card-text ">Photo by {image.user.name}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        );
      };
      

export default ImageList;