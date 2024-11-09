import { useParams, Link } from "react-router-dom"
import {getDoc, doc} from 'firebase/firestore';
import {db} from '../firebase/config'
import { useEffect,useState } from 'react';
import EditIcon from '../assets/edit.svg';

export default function Article() {
  const { urlId } = useParams()

  console.log("id: " + urlId)

  const [article, setArticle] = useState(null);

  useEffect(() => {
    const ref = doc(db, 'articles', urlId);
    getDoc(ref)
      .then((snapshot)=>{        
        setArticle(snapshot.data());
      })

  },[])  
  

  return (
    <div>
      {!article && <p>No records found!</p>}
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.description}</p>
          <Link to={`/newEdit/${urlId}`}><img 
            className="icon"
            src={EditIcon} alt="delete icon" 
          /></Link>
        </div>
      )}
    </div>
  )
}
