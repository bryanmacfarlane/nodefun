/**
 *
 * function pointers in javascript
 *
 * Created : bryan
 * Date    : 1/1/12
 */

function say(word)
{
    console.log(word);
}

function execute(func, value)
{
    func(value);
}

execute(say, "Hello");

