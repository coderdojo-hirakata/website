/* This example requires Tailwind CSS v2.0+ */
import {BookOpenIcon, DesktopComputerIcon, StarIcon, UsersIcon} from "@heroicons/react/solid";

const features = [
    {
        name: 'プログラミングワークショップ',
        description:
            '初めての子どもからベテランまで参加できる、無料プログラミングワークショップを運営・開催しています。',
        icon: DesktopComputerIcon,
    },
    {
        name: 'メンター',
        description:
            'ワークショップ内で、子どもたちのプログラミングのサポートを行っています。',
        icon: UsersIcon,
    },
    {
        name: '特別ワークショップ',
        description:
            '外部イベントなどで、無料プログラミングワークショップを開催します。',
        icon: StarIcon,
    },
    {
        name: '図書貸出',
        description:
            'CoderDojo枚方で所有している書籍を子どもたちに無料で貸し出ししています。',
        icon: BookOpenIcon,
    },
]

export default function Feature() {
    return (
        <div className="py-12 bg-white mt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        子どもたちに自由なプログラミング体験を
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        CoderDojo枚方は、子どもたちのための、オープンソース・プログラミング道場（クラブ、ワークショップ）で、子どもたちが無料で主体的にプログラミングを学習・体験できます。全世界に2,000ヶ所以上の道場があり、枚方は1,000番目の道場です。
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        ワークショップは5歳から17歳までの子どもが参加することができ、『メンター』と呼ばれるサポート役が、子どもたちのプログラミングのお手伝いをします。
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        CoderDojo枚方では主に以下の活動を行っています。
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
