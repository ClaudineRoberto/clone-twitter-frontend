import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
    id: 123,
    user: user,
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nunc nec nunc.',
    image: 'https://dropsdejogos.uai.com.br/wp-content/uploads/sites/10/2021/11/reproducao-gaules-instagram-scaled.jpg',
    likeCount: 523,
    commentCount: 123,
    retweetCount: 23,
    liked: true,
    retweeted: false,
    dataPost: new Date(2024, 8, 1, 10, 0, 0)
};