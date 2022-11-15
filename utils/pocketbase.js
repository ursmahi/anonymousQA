import PocketBase from 'pocketbase';
const client = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);


export function createNewAccount(loginString, pin) {
    const out = client.records.create('authkey', {
        loginString: loginString,
        userpin: pin
    });
    out.then((res) => {
        if (res.status === 200) {
            console.log('Account created successfully');
        }
    });
}

export function changeNewPin(loginString, pin) {
    client.records.update('authkey', {
        loginString: loginString
    }, {
        pin: pin
    });
}

export async function getAccountPin(loginString) {
    const getPIN = await client.records.getList('authkey', 1,50, {
        sort: '-created',
    });
    const result = getPIN.items.find(item => item.loginString === loginString);
    return result ? result.userpin : 0;
}

export async function getAccount(loginString) {
    const Account = await client.records.getList('authkey', 1,50, {
        sort: '-created',
    });
    const result = Account.items.find(item => item.loginString === loginString);
    if(result?.loginString === loginString){
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


export async function getLongUrl(shortUrl) {
    const resultList = await client.records.getList('link', 1, 50, {
        sort: '-created',
    });
    const result = resultList.items.find(item => item.shorturl === shortUrl);
    return result ? result.url : 0;

}