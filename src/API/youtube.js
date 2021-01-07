import axios from "axios";

const key = "AIzaSyB5445xdI5oeQNDv1VSaqFcedVc3cL_lNY";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3", 
    params: {
        part: "snippet", 
        type: "video",
        maxResults: 5,
        key: key
    }
});