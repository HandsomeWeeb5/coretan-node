const { readFile, writeFile } = require('fs');


readFile('./content/text1.txt', 'utf-8', (err, result) => {
    if(err){
        console.log(err)
        return;
    }
    const text1 = result;
    readFile('./content/text2.txt', 'utf-8', (err, result) => {
        if(err){
            console.log(err)
            return;
        }
        const text2 = result;
        writeFile(
            './content/hasil-async.txt',
            `Ini hasil penggabungan text: ${text1} dan ${text2}`, (err, result) => {
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            })
    })
});


