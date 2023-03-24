import axios from "axios";

const PostItem =({post=null})=> {

    const onDeletePost=async()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        try{
            const {status} = await axios.delete(`${url}/${post.id}`)
            if(status===200){
                alert('Se eliminó correctamente')
            }else{
                alert('Algo pasó, verifica con Peter')
            }
        }catch (e){
            console.log(e)
            alert('Algo pasó, verifica con Peter')
        }
    }


    return (
        <div style={styles}>
            <b>{post?.title}</b>
            <p>{post?.body}</p>
            <button onClick={onDeletePost}> Eliminar</button>
        </div>
    )
}

const styles= {
    marginLeft:20,
    padding:20,
    margin:20,
    border:'1px solid gray',
    width:340,
    height:340,
    float:'left'
}

export default PostItem;