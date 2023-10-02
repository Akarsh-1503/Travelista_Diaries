import React from "react";
import ReactDOM from "react-dom";
import './index.css';



// const collage = '/Images/Collage.png';
ReactDOM.render(
<section className="container">
    <header className="header">
    <h1 className="heading">Destinations</h1>
    </header>
    <section className="DCollage">
        <img src='Images/Collage.png' alt="Not available" className="collage"/>
   </section>
    
<div className="sec1">
    <div className="diamond"></div>
    <div><img src="Images/Image100.png" alt="Not available" className="img1"/></div>
    <div className="headpara">
        <h1 className="subheading">Historical Significance</h1>
        <div className="para"><p> Punjab has a deep historical legacy, and its architectural landmarks often reflect this. Visitors can admire the historical significance of sites like the Golden Temple in Amritsar, which has played a pivotal role in Sikh history.</p></div>
    </div>
</div>



<div className="sec2">
    <div className="headpara2"> 
        <h1 className="subheading">Intricate Carvings</h1>
        <div className="para"><p>The intricate stone carvings on temples and monuments,showcase the artistic prowess of ancient craftsmen and are a testament to the dedication and skill of artisans.</p></div>
    </div>
    <div className="diamond"></div>
    <div><img src="Images/Image102.png" alt="Not available" className="img2"/></div>
</div>



<div className="sec3">    
    <div className="diamond"></div>
    <div><img src="Images/Image103.png" alt="Not available" className="img3"/></div>
    <div className="headpara">
        <h1 className="subheading">Architecture</h1>
        <div className="para"><p>Exploring the architecture in cities like Delhi, Jaipur, and Kolkata provides a unique perspective on India's history.</p></div>
    </div>
</div> 
 


<div className="sec4">
    <div className="headpara2">
        <h1 className="subheading">Monument Preservation</h1>
        <div className="para"><p>The efforts to preserve and restore historical monuments in India are commendable. Admirers can appreciate the dedication of organizations and individuals working to protect these architectural treasures.</p></div>
    </div>
    <div className="diamond"></div>
    <div><img src="Images/Image101.png" alt="Not available" className="img4"/></div>
</div>

    </section>,document.getElementById('root')
);
