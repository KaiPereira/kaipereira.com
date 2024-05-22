import matter from 'gray-matter';
import fs from "fs";
import path from "path";
import { remark } from 'remark';
import html from 'remark-html';

export const getAllPosts = () => {
    // Get all posts
    const posts = path.join(process.cwd(), 'content', 'posts');

    // Grab all files inside
    const files = fs.readdirSync(posts);

    // Loop over all the files and put them into an array
    let fileContents = []

    files.forEach((file) => {
        // Get the full file path
        const filePath = path.join(posts, file);

        // Read the content of the file
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = matter(content)

        const url = file.replace(".md", "")

        fileContents.push({
            url: url,
            title: data.data.title,
            thumbnail: data.data.thumbnail,
            date: data.data.date,
            time: data.data.time,
            body: data.content,
            description: data.data.description
        })
    });

    return fileContents
}


export const getPost = async (url) => {

    const allPosts = getAllPosts()

    console.log()

    const post = allPosts.find((post) => post.url == url)
    console.log(post)

    const result = await remark().use(html).process(post.body);


    const post_details = {
        html: result.toString(),
        thumbnail: post.thumbnail,
        title: post.title,
        description: post.description
    }

    
    return post_details
}