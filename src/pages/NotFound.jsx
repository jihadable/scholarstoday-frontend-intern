import img404 from "../assets/not-found.png"

export default function NotFound(){
    return (
        <section className="flex flex-col w-screen h-screen items-center justify-center">
            <img src={img404} alt="404" />
            <h1 className="text-2xl font-bold">Page not found</h1>
        </section>
    )
}