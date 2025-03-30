import { useState, useEffect } from 'react';
import useSWR from 'swr';

export default function NoteList() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNotes() {
            try {
                setLoading(true);
                const response = await fetch('/api/notes');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch notes');
                }
                
                const xmlText = await response.text();
                
                // ブラウザのDOMParserを使用してXMLをパース
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, "text/xml");
                
                // 記事アイテムを取得
                const items = xmlDoc.querySelectorAll('item');
                
                // 記事データを整形
                const parsedNotes = Array.from(items).map(item => {
                    // 必要なデータを抽出
                    const title = item.querySelector('title')?.textContent || '';
                    const link = item.querySelector('link')?.textContent || '';
                    const pubDate = item.querySelector('pubDate')?.textContent || '';
                    const description = item.querySelector('description')?.textContent || '';
                    
                    // 日付をフォーマット
                    const date = new Date(pubDate);
                    const formattedDate = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
                    
                    return {
                        title,
                        link,
                        pubDate: formattedDate,
                        description
                    };
                });
                
                setNotes(parsedNotes);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching notes:', err);
                setError('記事の取得に失敗しました');
                setLoading(false);
            }
        }
        
        fetchNotes();
    }, []);

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-10">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">ブログ</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        最新の記事
                    </p>
                </div>
                
                <div className="mt-10">
                    <ul className="space-y-8">
                        {notes.map((note, index) => (
                            <li key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <a href={note.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <h3 className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors duration-300">{note.title}</h3>
                                    <time className="block text-sm text-gray-500 mt-1">{note.pubDate}</time>
                                    <div className="mt-3 text-gray-700 line-clamp-3" dangerouslySetInnerHTML={{ __html: note.description }}></div>
                                    <div className="mt-4 flex justify-end">
                                        <span className="text-primary font-medium">続きを読む →</span>
                                    </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="mt-10 text-center">
                        <a 
                            href="https://note.com/coder_hirakata" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300"
                        >
                            すべての記事を見る
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}