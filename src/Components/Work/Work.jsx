
import './work.scss'
import PhotoAlbum from "react-photo-album";
import {images} from "../Helper/galleryData"


const Work = () => {

  return (

          <body className='work'>


      <header>
        <h1>Before and after cleaning pictures</h1>
      </header>

      <section >

        <div className='paragraph'>
          <p>Below you will see some examples of the work performed by New Haven Cleaners LLC. Please browse our portfolio of these before and after images to see how New Haven Cleaners LLC can make your living space pristine!

          </p>
        </div>

        <PhotoAlbum layout="rows" photos={images} />;




    </section>
    </body>
  )
}

export default Work