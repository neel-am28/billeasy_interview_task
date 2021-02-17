import { useState, useEffect } from 'react'
import './Gallery.css'
import Modal from './Modal'

function Gallery() {
  const [images, setImages] = useState([])
  const publicAPI = 'http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0'
  const [imgSrc, setImgSrc] = useState('')
  const [showModal, setShowModal] = useState(false)

  // fetch images from api and set state with the result
  useEffect(() => {
    fetch(publicAPI)
      .then(response => response.json())
      .then(result => setImages(result))
      .catch(error => console.log(error))
  }, [])

  function modalStatus(e) {
    setShowModal(true)
    setImgSrc(e.target.getAttribute('src'))
  }
  function changeState() {
    setShowModal(false)
  }
  // creating dynamic html
  let galleryHTML =
    images.map(image => {
      return <img src={image.urls.regular} alt={image.alt_description} key={image.id} onClick={(e) => modalStatus(e)} className="galleryImage" />
    })

  return (
    <div className="gallery">
      {galleryHTML}
      {showModal && <Modal imgSrc={imgSrc} changeState={changeState} showModal={showModal} />}
    </div>
  );
}

export default Gallery;
