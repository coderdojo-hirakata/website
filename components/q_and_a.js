import {Component} from "react";

export default class QAndA extends Component {

    render() {
        const question = this.props.question;
        const answer = this.props.answer;

        return <div className="flex items-start mb-8">
            <div
                className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-primary text-white border-4 border-white text-xl font-semibold">
                <svg width="24px" fill="white" height="24px" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                            <rect width="24" height="24" transform="rotate(180 12 12)"
                                  opacity="0"></rect>
                            <path
                                d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z">
                            </path>
                            <circle cx="12" cy="19" r="1"></circle>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="text-md">
                <h2 className="text-gray-900 font-semibold mb-2">
                    {question}
                </h2>
                <p className="text-gray-500 text-sm">
                    {answer}
                </p>
            </div>
        </div>;
    }
}
