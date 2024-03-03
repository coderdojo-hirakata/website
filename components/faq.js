import {Component} from "react";
import QAndA from "./q_and_a";

const questions = [
    {
        section: "参加について",
        questions: [
            {
                question: "参加申し込みはどこからできますか？",
                answer: "CoderDojo枚方のイベントは、現在connpassで申し込みを受け付けています。"
            },
            {
                question: "子ども一人でも参加できますか？",
                answer: "13歳未満のお子様は保護者の方同伴でお願いします。"
            },
            {
                question: "参加費はかかりますか？",
                answer: "無料で参加できます。"
            },
            {
                question: "持ち物はありますか？",
                answer: "Wi-Fiに接続できるノートパソコン・タブレットを持参してください。"
            },
            {
                question: "プログラミングの経験は必要ですか？",
                answer: "不要です。初めてのお子様でもご参加いただけます。"
            },
        ]
    },
    {
        section: "メンターについて",
        questions: [
            {
                question: "メンターはどのような人たちですか？",
                answer: "プログラミングに興味を持ち、子どもたちのサポートを行ってくれるボランティアです。"
            },
            {
                question: "メンターになるにはどうしたらいいですか？",
                answer: "CoderDojo枚方のメンターになりたい方は、お問い合わせフォームからご連絡ください。"
            },
            {
                question: "子どももメンターになれますか？",
                answer: "CoderDojo枚方では、中学生以上の子どももメンターとして参加できます。メンターをしながら自身の作品の開発も行えます。"
            }
        ]
    }
]
export default class Faq extends Component {
    render() {
        return (
            <div className="py-12 bg-white mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            よくあるご質問
                        </p>
                        {questions.map((q) => (
                            <div className="sm:flex items-start mt-10">

                                <h3 className="py-3 font-bold text-lg text-gray-900 w-2/12">
                                    {q.section}
                                </h3>
                                <div className="w-10/12 text-left">
                                    {q.questions.map((question) => (
                                        <QAndA question={question.question} answer={question.answer}/>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}