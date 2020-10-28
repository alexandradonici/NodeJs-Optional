const hackNSA = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('hackFinished');
            const password = 'admin';
            resolve({
                password, 
            });

    }, 2000);
});
}

module.exports = hackNSA;