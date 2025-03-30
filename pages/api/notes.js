import nc from "next-connect";
import cors from "cors";

const RSS_URL = 'https://note.com/coder_hirakata/rss';

const config = {
    headers: {
        Accept: "application/xml, text/xml, application/rss+xml"
    }
}

const handler = nc()
    .use(cors())
    .get(async (req, res) => {
        try {
            // RSSフィードを取得
            const response = await fetch(RSS_URL, config);
            const xmlText = await response.text();
            
            // 生のXMLテキストをそのままクライアントに返す
            // クライアント側でパースする
            res.setHeader('Content-Type', 'text/xml');
            res.status(200).send(xmlText);
        } catch (error) {
            console.error("RSS fetch error:", error);
            res.status(500).json({ error: "Failed to fetch RSS feed" });
        }
    });

export default handler;