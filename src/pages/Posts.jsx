import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Posts(){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async() => {
            try {
                const APIEndpoint = import.meta.env.VITE_API_ENDPOINT

                const { data } = await axios.get(`${APIEndpoint}/posts`)

                setPosts(data)
            } catch(error){
                console.log(error)
            }
        }

        getPosts()
    }, [])

    return (
        <section className="my-20 flex flex-col gap-4 w-[80vw] mx-auto mobile:w-full mobile:px-4">
            <h1 className="text-2xl font-bold">Posts</h1>
            <article className="grid grid-cols-4 gap-4 mobile:grid-cols-1">
            {posts.map((post, index) => (
                <Link to={`/posts/${post.id}`} className="flex flex-col gap-4 p-4 rounded-md bg-[rgb(255,255,255,.1)] " key={index}>
                    <h2 className="text-xl font-black line-clamp-1">{post.title}</h2>
                    <p className="line-clamp-2">{post.body}</p>
                </Link>
            ))}
            </article>
        </section>
    )
}