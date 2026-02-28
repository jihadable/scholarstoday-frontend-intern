import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/posts/:id" element={<Post />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}