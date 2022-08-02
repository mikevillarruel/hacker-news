export interface HackerNews {
    hits: Post[];
    nbPages: number;
}

export interface Post {
    created_at: string;
    author: string;
    story_title: string;
    story_url: string;
    objectID: string;
}


