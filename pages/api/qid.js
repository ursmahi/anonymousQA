import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default async function handler(req, res) {
    const list = client.records.getList('qa', 1,200, {
        sort: '-created',
    });
    list.then((result) => {
        const data = result.items.map((item) => {
            return item.questionID;
        });
        res.status(200).json(data);
    }
    );
}