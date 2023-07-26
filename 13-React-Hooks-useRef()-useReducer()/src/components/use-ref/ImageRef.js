import React from 'react';
import img1 from '../../assets/images/home.jpg'; 
import { useRef } from 'react';

let ImageRef = ()=>{
    let ImageRefEl = useRef(null);

    let clickGetImage = (e)=>{
        console.log(ImageRefEl.current);    
    }

    return(
        <React.Fragment>
            <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                               <img ref={ImageRefEl} src={img1} alt="" className='img-fluid' />
                            </div>
                            <div className="card-body">
                               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque animi molestiae, harum, magnam quae fugit quaerat similique tenetur itaque dolore rerum iste exercitationem eum veritatis nihil esse? Architecto sit adipisci ab, illum nesciunt autem, dolores omnis assumenda ipsam, voluptatum quod!</p>
                               <button onClick={clickGetImage} className="btn btn-secondary btn-sm">ImgRef</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ImageRef;