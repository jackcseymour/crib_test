import { useState } from 'react'
import { SignIn, SignOut, useAuthentication } from '../../components/services/authService'
import { fetchItems } from '../../components/services/itemService'
import './List.css'

export default function List() {
  const [content, setContent] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [items, setItems] = useState([])
  const [item, setItem] = useState(null)

  const user = useAuthentication()

  useEffect(() => {
    if (user) {
      fetchItems().then(setItems)
    }
  }, [user])

  // Update the "database" *then* update the internal React state. These
  // two steps are definitely necessary.
  function addArticle({ title, body }) {
    createArticle({ title, body }).then(article => {
      setArticle(article)
      setArticles([article, ...articles])
      setWriting(false)
    })
  }

  const handleChange = event => {
    const { value } = event.target
    console.log('VALUE: ', value)
    setImageUrl(createImageUrl(value))
    setContent(value)
  }

  const createImageUrl = value => {
    const url = `https://spoonacular.com/cdn/ingredients_100x100/${value}.jpg`
    console.log('URL: ', url)
    return url
  }

  return (
    <div className="List">
      <header>
        Shopping List
        {!user ? <SignIn /> : <SignOut />}
      </header>

      <input value={content} onChange={e => handleChange(e)} />

      <div>
        <img src={imageUrl} alt="item" />
      </div>
    </div>
  )
}
