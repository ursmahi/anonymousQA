import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);


export function createNewAccount(loginString, pin) {
    const out = client.records.create('userData', {
        loginString: loginString,
        userpin: pin,
        questionIDS: {
            "ids": []
        }
    });
    out.then((res) => {
        if (res.status === 200) {
            console.log('Account created successfully');
        }
    });
}

export function changeNewPin(loginString, pin) {
    client.records.update('userData', {
        loginString: loginString
    }, {
        pin: pin
    });
}

export async function getAccountPin(loginString) {
    const getPIN = await client.records.getList('userData', 1, 50, {
        sort: '-created',
    });
    const result = getPIN.items.find(item => item.loginString === loginString);
    return result ? result.userpin : 0;
}

export async function getAccount(loginString) {
    const Account = await client.records.getList('userData', 1, 50, {
        sort: '-created',
    });
    const result = Account.items.find(item => item.loginString === loginString);
    if (result?.loginString === loginString) {
        return {
            loginString: result.loginString,
            userpin: result.userpin,
        }
    }
    return {
        loginString: '',
        userpin: 0,
    };
}


export const addQuestion = (loginString, questionID, question) => {
    client.records.create('qa', {
        questionID: questionID,
        question: question,
        answers: {
            "answers": []
        }
    });

    let out = client.records.getList('userData', 1, 1, {
        filter: `loginString="${loginString}"`
    }).then((res) => {
        const uniqueID = res.items[0].id;
        const record = client.records.getOne('userData', `${uniqueID}`, {
            expand: 'some_relation'
        }).then((res) => {
            const qID = res.questionIDS;
            const data = { "ids": [questionID, ...qID.ids] }
            client.records.update('userData', `${uniqueID}`, {
                questionIDS: data
            });
        });

    }).catch((err) => {
        console.log(err);
    });

}

export const answerQuestion = (uniqueID, answer) => {
    client.records.getOne('qa', `${uniqueID}`, {
        expand: 'some_relation'
    }).then((res) => {
        const qID = res.answers;
        const data = { "answers": [answer, ...qID.answers] }
        client.records.update('qa', `${uniqueID}`, {
            answers: data
        });
    });

}


export const deleteQuestion = (loginString, questionID) => {
    const del = client.records.getList('qa', 1, 50, {
        sort: '-created',
        }).then((res) => {
            const question = res.items.find(item => item.questionID === questionID);
            if(question){
                client.records.delete('qa', question.id);
            }
        }
    );

    const updateUserData = client.records.getList('userData', 1, 1, {
        filter: `loginString="${loginString}"`
    }).then((res) => {
        const uniqueID = res.items[0].id;
        const record = client.records.getOne('userData', `${uniqueID}`, {
            expand: 'some_relation'
        }).then((res) => {
            const qID = res.questionIDS;
            const data = { "ids": qID.ids.filter(item => item !== questionID) }
            client.records.update('userData', `${uniqueID}`, {
                questionIDS: data
            });
        });

    }
    );
}

export async function getLongUrl(v) {
    const resultList = await client.records.getList('link', 1, 50, {
        sort: '-created',
    });
    const result = resultList.items.find(item => item.shorturl === shortUrl);
    return result ? result.url : 0;

}