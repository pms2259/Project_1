import "./single.css";
import SideBar from "../sidebar/SideBar";
import SinglePost from "../../components/singlePost/SinglePost";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <SideBar />
        </div>
    );
}