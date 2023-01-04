import nc from "next-connect";
import cors from "cors";
import dayjs from "dayjs";

const date = dayjs();
const remoteServerUrl = 'https://connpass.com/api/v1/event/?series_id=2248&count=1ym=' + date.format("YYYYMM") + ',' + date.add(1, 'month').format("YYYYMM")

const config = {
    mode: 'no-cors',
    headers: {
        Accept: "application/json"
    }
}

const handler = nc()
    // use connect based middleware
    .use(cors())
    .get(async (req, res) => {
        const response = await fetch(remoteServerUrl, config);
        const json = await response.json()
        res.json(json);
    });

export default handler;
