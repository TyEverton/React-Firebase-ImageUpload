import { useState } from 'react'
import './App.css'
import storage from './firebaseConfig'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

function App() {
  const [image, setNewImage] = useState('')
  const [percent, setPercent] = useState(0)

  const handleChange = (e) => {
    setNewImage(e.target.files[0])
  }

  const handleUpload = () => {
    if (!image) {
      alert('Please choose a file')
    }

    const storageRef = ref(storage, `/images/${image.name}`)
    const uploadTask = uploadBytesResumable(storageRef, image)

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )

        setPercent(percent)
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url)
        })
      }
    )
  }
  return (
    <div className='App'>
      <input type='file' accept='image/*' onChange={handleChange} />
      <button onClick={handleUpload}>Upload to Firebase</button>
      <p>{percent} "% done"</p>
    </div>
  )
}

export default App
