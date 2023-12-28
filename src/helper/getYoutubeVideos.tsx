import axios, { AxiosResponse } from "axios"

export interface YouTubeVideo {
    kind: string;
    etag: string;
    id: {
        kind: string;
        videoId: string;
    };
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: {
                url: string;
                width: number;
                height: number;
            };
            medium: {
                url: string;
                width: number;
                height: number;
            };
            high: {
                url: string;
                width: number;
                height: number;
            };
        };
        channelTitle: string;
        liveBroadcastContent: string;
        publishTime: string;
    };
}


const getYoutubeVideo = async (channelId: String) => {

    try {
        const response: AxiosResponse = await axios.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyAvaZ35RODNWWD8QZ3dHFMLRipwbpdvhyk&channelId=" + channelId + "&part=snippet,id&order=date&maxResults=3");
        return response.data.items;
    } catch (error) {
        throw error;
    }

}

export default getYoutubeVideo;