import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

import style from "./SinglePage.module.css";

const data = [
    {
        slug: "app",
        title: "About the App",
        description:
            "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
        slug: "author",
        title: "About the Author",
        description:
            "This app was developed by André Sá de Mello, based on the tutorial by Ibas Majid at https://ibaslogic.com/.",
    },
];

export default function SinglePage() {
    const { slug } = useParams();
    const content = data.find(item => item.slug === slug);
    if (content === undefined) {
        return (
            <div className={style.content}><NotFound /></div>
        );
    }
    const { title, description } = content;
    return (
        <div className={style.content}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}