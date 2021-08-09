import nc from "next-connect";
import cors from "cors";

const date = new Date()
const remoteServerUrl = 'https://zen.coderdojo.com/api/3.0/dojos/54fb4603-de0d-4de1-9fd9-518c5127caaa/events?orderBy=startTime&page=1&pageSize=1&query%5Bstatus%5D=published&query%5BafterDate%5D=' + Math.floor(date.getTime() / 1000) + '&query%5ButcOffset%5D=9'

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
