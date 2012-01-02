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

// pass a function name
execute(say, "Hello");

// pass a function definition
execute(
    function(word)
    {
        console.log(word);
    },
    "World!"
);

