/* This example requires Tailwind CSS v2.0+ */
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline'
import {Component} from "react";
import {zenUrl} from "./navigation";

class EventBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            closed: ""
        }
    }
    render() {
        const date = new Date(this.props.date)
        const formattedDate = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日'

        return (
            <div className={"bg-primary " + this.state.closed}>
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">
                        <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-primary border-white border-2">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
                            <p className="ml-3 font-medium text-white truncate">
                                <span className="md:hidden">{ formattedDate + 'に『' + this.props.title + '』を開催！'}</span>
                                <span className="hidden md:inline">{ formattedDate + 'に『' + this.props.title + '』を開催！'}</span>
                            </p>
                        </div>
                        <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                            <a
                                href={ this.props.url }
                                target="_blank"
                                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary bg-white"
                            >
                                参加する
                            </a>
                        </div>
                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <button
                                type="button"
                                onClick={() => {this.setState({closed: "hidden"}); console.log('hoge')}}
                                className="-mr-1 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EventBanner
