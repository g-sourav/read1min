export interface BlogDetail {
    id: string,
    title: string,
    topic: string,
    description: string,
    subTopics: Array<String>,
    dataPath: string,
    publishBy: string,
    date : string,
    lastEdit: string
};


export const BlogDetailsList: Array<BlogDetail> = [
{
    "id": "1",
    "title": "Uri movie review",
    "topic": "entertainment",
    "description":"",
    "subTopics": ["movie","bollywood"],
    "dataPath" : "blogs/entertainment/uri-movie-review/",
    "publishBy": "admin",
    "date": "2023-05-19",
    "lastEdit": "2023-05-19",
},
{
    "id": "2",
    "title": "The Ashes",
    "topic": "sports",
    "description":"",
    "subTopics": ["cricket"],
    "dataPath" : "blogs/sports/the-ashes/",
    "publishBy": "admin",
    "date": "2023-05-19",
    "lastEdit": "2023-05-19",
},
{
    "id": "3",
    "title": "Ancient Man",
    "topic": "history",
    "description":"",
    "subTopics": ["life","history","science"],
    "dataPath" : "blogs/history/ancient-man",
    "publishBy": "admin",
    "date": "2023-05-19",
    "lastEdit": "2023-05-19"
}
]