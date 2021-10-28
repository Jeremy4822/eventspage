import Head from "next/head"
import styles from "../styles/layout.module.css";
export default function Layout({tittle, keywords, description,children}){
    return(
        <div>
        <head>
           <title>{title}</title>
           <meta name="description" content={description} />
           <meta name="keywords" content={keywords} />
        </head>
        <div className={Style.container}>{children}</div>
            </div>
        
);
 }