/**
 * Validation logic shared between the client submitting the form and the server processing data.
 *
 * User: bryanmac
 * Date: 2/15/12
 */

//
// Code shared between Node and browser.  exports is not defined in a browser
// http://caolanmcmahon.com/posts/writing_for_node_and_the_browser
//
if (typeof exports == 'undefined')
{
    var exports = this['validator'] = {};
}

exports.isNameValid = function(name)
{
    return name == ""? false : true;
}

exports.isGradeValid = function(grade)
{
    var result = true;
    var validGrades = ["A", "B", "C", "D", "F"];
    if (grade == "" || validGrades.indexOf(grade) < 0)
    {
        result = false;
    }

    return result;
}
