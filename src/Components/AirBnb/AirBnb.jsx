import React from 'react'
import './airBnb.css'
import image1 from '../../Assets/Airbnb.jpeg'


const Airbnb = () => {
  return (
    <section className='airbnb'>
    <header>
      <img src={image1} alt="a clean Airbnb" />
      <div className="content container">
        <div className="cardDiv">
          <h1>Airbnb</h1>
          <p>Airbnb and Moving cleaning services, customizable to suit your needs.</p>
        </div>
      </div>
    </header>

    <section className='two-col'>
      <div className='mainHeader'>
        <h2>Premium Airbnb clean</h2>
        <p>Weekly, Biweekly, Monthly or One-Time Cleaning Visits Available</p>
      </div>
      <div className='mainContent'>
        <div className='col'>
          <div className='paragraph'>
            <h3>Preparing for Guest Arrivals</h3>
            <p>Before each guest’s arrival, MSL ensures that the property is thoroughly cleaned and ready for occupancy. This includes dusting, vacuuming or mopping floors, sanitizing bathrooms and kitchens, making beds, and arranging furniture</p>
          </div>
          <div className='paragraph'>
            <h3>Linen and Towel Management</h3>
            <p>We can handle the washing, drying, and folding of bed linens, towels, and other textiles used in the vacation rental. We ensure that fresh, clean linens are provided for each guest</p>
          </div>
          <div className='paragraph'>
            <h3>Bathroom Cleaning</h3>
            <p>Detailed cleaning of bathrooms is essential to maintain hygiene. Services include scrubbing toilets, sinks, and showers, disinfecting surfaces, replenishing toiletries, and restocking clean towels</p>
          </div>

          <div className='paragraph'>
            <h3>Kitchen Cleaning</h3>
            <p>The kitchen is an important area that requires thorough cleaning. Services typically include cleaning counter tops, appliances (such as stove top, oven, microwave, refrigerator), sinks, and cabinets. We can also restock essential supplies, such as dish-washing detergent and trash bags</p>
          </div>

          <div className='paragraph'>
            <h3>Dusting and Surface Cleaning</h3>
            <p>TWe focus on removing dust and dirt from surfaces throughout the property, including furniture, shelves, windowsills, and other visible areas. They may also clean mirrors, glass surfaces, and decorative items</p>
          </div>
        </div>

        <div className='col'>
          <div className='paragraph'>
            <h3>Floor Care</h3>
            <p>Vacuuming or mopping floors is a routine task performed by MSL. We pay attention to different flooring types (e.g., carpet, hardwood, tile) and use appropriate cleaning methods to ensure cleanliness and maintenance
            </p>
          </div>
          <div className='paragraph'>
            <h3>ETrash and Waste Disposal</h3>
            <p>We handle the removal of trash and waste from the property, ensuring that waste bins are emptied and taken to designated areas
            </p>
          </div>
          <div className='paragraph'>
            <h3>Inspecting for Damages</h3>
            <p>As part of our cleaning routine, we conduct a visual inspection of the property, checking for any damages, broken items, or maintenance issues. We report these issues to the property owner or manager for prompt resolution</p>
          </div>
          <div className='paragraph'>
            <h3>Restocking Supplies</h3>
            <p> We also offer restocking services, where we ensure that essential supplies such as toilet paper, paper towels, soap, and cleaning products are adequately replenished</p>
          </div>
          <div className='paragraph'>
            <h3>Check-Out Cleaning</h3>
            <p>After each guest’s departure, we perform a thorough cleaning of the property. This includes removing used linens, washing and replacing them with clean ones, disinfecting surfaces, and preparing the property for the next guest’s arrival</p>
          </div>
        </div>
      </div>
    </section>


  </section>


  )
}

export default Airbnb