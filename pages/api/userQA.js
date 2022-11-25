import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

export default async function handler(req, res) {
    const loginString = req.query.loginString;
    const questionlist = req.query.questionlist;
    const qa = req.query.qa;
    client.records.getList('userData', 1, 1, {
        sort: '-created',
    }).then((result) => {
        const user = result.items.find(item => item.loginString === loginString);
        console.log(`user: ${user}`)
        if (user) {
            const questionIDS = user.questionIDS.ids;
            client.records.getList('qa', 1, 50, {
                sort: '-created',
            }).then((result) => {
                const questions = result.items.filter(item => questionIDS.includes(item.questionID));
                if(questionlist === 'true'){
                    const data = questions.map((item) => {
                        return {
                        questionID: item.questionID,
                        question: item.question,
                        createdAt: item.created
                        }
                    });
                    res.status(200).json(data);

                }
                if(qa === 'true'){
                
                const data = questions.map((item) => {
                    return {
                        questionID: item.questionID,
                        question: item.question,
                        answers: item.answers,
                        createdAt: item.created
                    }
                });
                res.status(200).json(data);
            }
            });
        } else {
            console.log("NOT FOUND")
            res.status(200).json([]);
        }
    }
    );
}