import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default async function handler(req, res) {
    const qid = req.query.qid;
    client.records.getList('qa', 1, 200, {
        sort: '-created',
    }).then((result) => {
        const response = result.items.find(item => item.questionID === qid);
        if (response) {
            res.status(200).json({"uniqueID":response.id ,"question": response.question, "answers": response.answers });
        } else {
            res.status(404).json({
                error: 'Question not found'
            });
        }
    }
    );

}