import axios from 'axios'
import {useEffect, useState} from "react";
import PostItem from "./PostItem";


const PostList =({title='Listado de posts'})=> {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPostList()
    },[])


    const getPostList=async()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        try{
            const {data} = await axios.get(url)
            data ? setPosts(data):setPosts([]);
        }catch (e){
            console.log(e)
            setPosts([])
        }
    }


    return (
        <div>
            <p>{title}</p>
            {
                posts && posts.map((p)=> {
                    return <PostItem key={p.id} post={p}/>
                })
            }

        </div>
    )
}

export default PostList;