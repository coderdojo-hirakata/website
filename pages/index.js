import styles from '../styles/Home.module.css'
import Hero from "../components/hero";
import Feature from "../components/feature";
import {connpassUrl} from "../components/navigation";
import useSWR from 'swr'
import EventBanner from "../components/eventBanner";
import Ogp from "../components/ogp";
import NoteList from "../components/noteList";

const date = new Date()
const fetcher = (url) => fetch(url).then((res => res.json()))

export default function Home() {
    const url = '/api/events'
    const { data, error } = useSWR(url, fetcher)
    const banner = () => {
        if (!data || data.total === 0) {
            return ""
        }
        const event = data.events[0]
        return (<EventBanner title={ event.title} date={ event.started_at } url={ event.event_url } />)
    }
  return (
    <div >
        <Ogp
            title={'Home | CoderDojo Hirakata'}
            description={'子ども向け無料プログラミングクラブ、CoderDojo HirakataのWebサイトです'}
            />
        <Hero />
        { banner() }
        <a id="about" />
        <Feature />


        <a id="mentor" />
        <div className="py-12 bg-white mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-primary font-semibold tracking-wide uppercase">メンター募集</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        一緒に子どもたちのプログラミング体験をサポートしませんか？
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        CoderDojo枚方は、子どもたちのプログラミングをサポートするメンターを募集しています。
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        希望の方は、下記ボタンよりCoderDojo枚方のメンバーに登録いただき、記載のメールアドレスへご連絡ください。なお、メンターでご協力いただくにあたり、事前にお打ち合わせをさせていただきます。
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">

                        <div className="rounded-md shadow">
                            <a
                                href={connpassUrl}
                                target="_blank"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-white hover:text-primary hover:border-primary md:py-4 md:text-lg md:px-10"
                            >
                                メンター参加する
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a id="blog" />
        <NoteList />

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
