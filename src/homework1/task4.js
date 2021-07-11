/*
Create object "utils". It should contain:
- function to generate random number,
- function to generate random alphanumeric string,
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message.
*/

const utils = {
    getRundomNumer: function () {
        return Math.random();
    },

    getRundomString: function () {
        var result = '';
        var length = 10;
        var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    },
    logger: function ( message, level = 'Info') {

        console.log(level + ': ' + message)
    },
};


utils.logger(utils.getRundomString())
utils.logger(utils.getRundomNumer(),'SomeLevel')

