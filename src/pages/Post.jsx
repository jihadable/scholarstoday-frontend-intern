import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NotFound from "./NotFound"

export default function Post(){
    const { id } = useParams()
    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async() => {
            try {
                const APIEndpoint = import.meta.env.VITE_API_ENDPOINT
                const { data: post } = await axios.get(`${APIEndpoint}/posts/${id}`) 
                const { data: user } = await axios.get(`${APIEndpoint}/users/${post.userId}`)

                setPost({...post, user})
            } catch(error){
                setPost("not-found")
                console.log(error)
            }
        }

        getPost()
    }, [id])

    if (post === "not-found"){
        return <NotFound />
    } else {
        return (
            <section className="my-20 flex flex-col gap-4 w-[80vw] mx-auto mobile:w-full mobile:px-4">
                <h2 className="font-black self-end">{post.user?.username}</h2>
                <h1 className="text-2xl font-bold">{post.title}</h1>
                <article className="flex flex-col w-full gap-4 bg-[rgb(255,255,255,.1)] p-4 rounded-md">
                    <p className="whitespace-pre-line">{post.body}</p>
                </article>
            </section>
        )
    }
}