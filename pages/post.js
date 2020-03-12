import Navbar from "./comps/navbar";
import "../public/static/css/post.scss";

const Post = () => {
    return (
        <div className="postMother">
            <Navbar/>
            <div className="postMain">
                <div className="editOptionsParent">

                </div>
                <div className="postInputParent">
                    <textarea placeholder="Begin typing here..."></textarea>
                </div>
            </div>
        </div>
    )
}

export default Post