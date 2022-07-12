import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const app = initializeApp({
  apiKey: 'AIzaSyCQQofNoNTnDtgcPUY1yq2HnPDuHIDs2GQ',
  authDomain: 'fir-react-image-uploads-a2bc1.firebaseapp.com',
  projectId: 'fir-react-image-uploads-a2bc1',
  storageBucket: 'fir-react-image-uploads-a2bc1.appspot.com',
  messagingSenderId: '447897307186',
  appId: '1:447897307186:web:f93d0365cee32f1c78542b',
  measurementId: 'G-C4QSSJ5046',
})

const storage = getStorage(app)

export default storage
