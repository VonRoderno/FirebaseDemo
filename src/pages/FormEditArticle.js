import { useRef, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import {db} from '../firebase/config'
// styles
import './create.css'

export default function Edit() {  

  const { articleId } = useParams();


  const title = useRef(null);
  const author = useRef(null);
  const description = useRef(null);
  
  console.log("id: " + articleId)

  const navigate = useNavigate()
  
  useEffect(() => {
    const ref = doc(db, 'articles', articleId);
    getDoc(ref)
      .then((snapshot)=>{        
        console.log("snapshot.data()")
        console.log(snapshot.data())
 
        title.current.value = snapshot.data().title;
        author.current.value = snapshot.data().author;
        description.current.value = snapshot.data().description;
      })

  },[])

  const handleSubmit = async (e) => {
    e.preventDefault()   
    const article = {
      title: title.current.value,
      author: author.current.value,
      description: description.current.value};
      const ref = doc(db, 'articles', articleId);
    await updateDoc(ref,article)

    navigate('/')
  }

  return (
    <div className="create">
      <h2 className="page-title">Edit Article</h2>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            ref = {title}
            required
          />
        </label>
        
        <label>
          <span>Author:</span>
          <input 
            type="text" 
            ref = {author}
            required
          />
        </label>

        <label>
          <span>Description:</span>
          <textarea 
            ref = {description}
            required
          />
        </label>

        <button className="btn">submit</button>
      </form>
    </div>
  )
}