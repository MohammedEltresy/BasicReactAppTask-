
import'./slider.css';

function Slider () 
{
return  (
<>
<div id="carouselExample" class="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.redspider.ae/wp-content/uploads/2020/06/ecommerce-seo-tips.jpg" class="d-block w-100 height-500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.export.org.uk/media/cvb9zpgu/ECommerce.jpg" class="d-block w-100 height-500 " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg" class="d-block w-100 height-500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className ="visually-hidden">Next</span>
  </button>
</div>
</>
    
)
}
export default Slider;