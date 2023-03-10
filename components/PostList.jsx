import axios from 'axios'
import {useEffect} from "react";


const PostList =()=> {

    useEffect(()=>{
        getPostList()
    },[])


    const getPostList=async()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts';
        try{
            const res = await axios.get(url)
            console.log(res)
        }catch (e){
            console.log(e)
        }
    }


    return (
        <div>
            <p>PostList</p>

        </div>
    )
}

export default PostList;