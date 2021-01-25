import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IMnJvj9RdyWJ3EgsWdNqQW8zdo8G2ohH5g&usqp=CAU' />
        { props.message }
      <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )

}

export default Post;