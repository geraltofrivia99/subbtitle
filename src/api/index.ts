export async function fetchSubtitles(id: string) {
    const response = await fetch(`https://video.google.com/timedtext?lang=en&v=${id}`);
    const str = await response.text();
    const document = new DOMParser().parseFromString(str,"text/xml");
    return document;
}

export async function getSubtitlesArray(id: string, useObject: boolean = true) {
    try {
        const xmlDoc = await fetchSubtitles(id);
        if (xmlDoc && hasSubtitles(xmlDoc)) {
            if (useObject) {
                return getSubObject([].slice.call(xmlDoc.getElementsByTagName('text')));
            }
            return getSubArray([].slice.call(xmlDoc.getElementsByTagName('text')));
        } else {
            return { error: 'Video does not contain subtitles' };
        }
    } catch {
        throw new Error('Fetch error');
    }
}

function hasSubtitles(xml: any) {
    if (!!xml.getElementsByTagName('parsererror').length) {
        return false;
    }
    return true;
}

interface IStartkeys {
    [key: number]: string | number;
}


function getSubObject(arr: any): any {
    const result: IStartkeys = {};
    arr.forEach((text: HTMLElement) => {
        const startAttr = text.getAttribute('start');
        const start = Math.floor(startAttr ? +startAttr : 0);
        // const dur = text.getAttribute('dur');
        const content = text.textContent;
        result[start] = decodeHTML(content ? content : '').replace(/\s+/g, ' ');
    })
    return result;
}

function getSubArray(arr: any): any {
    const startKeys: IStartkeys = {};
    return {
        list: arr.reduce((acc: any, cur: any) => {
            const startAttr = cur.getAttribute('start');
            const start = Math.floor(startAttr ? +startAttr : 0);
            const content = cur.textContent;
            startKeys[start] = start;
            acc.push({
                start,
                content: decodeHTML(content ? content : '').replace(/\s+/g, ' '),
            })
            return acc;
        }, []),
        startKeys,
    }
}

// function formatTime(seconds: number) {
//     let date = new Date(0);
//     date.setSeconds(seconds);
//     return date.toISOString().substr(11, 8);
// }

var decodeHTML = (function() {
    let el: HTMLDivElement = document.createElement('div');
    function __decode(str: string) {
        if (str && typeof str === 'string') {
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '')
                .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            el.innerHTML = str;
            str = el.textContent || str;
            el.textContent = '';
        }
        return str;
    }
    removeElement(el); // Clean-up
    return __decode;
  })();
  
function removeElement(el: HTMLElement) {
    el && el.parentNode && el.parentNode.removeChild(el);
}

const options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "translated-mymemory---translation-memory.p.rapidapi.com",
        "x-rapidapi-key": "ab05ecb6d8msh218f2f37de96f6fp1ee5e2jsnf55a953df1d4"
    } 
}

export async function trnslateWord(word: string, fromLang: string = 'en', toLang: string = 'ru') {
    try {
        const result = await fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/api/get?mt=1&onlyprivate=0&langpair=${fromLang}|${toLang}&q=${word}`, options);
        if (result) {
            return await result.json();
        } else {
            throw Error('err');
        }
    } catch (err) {
        throw Error(err);
    }
}

