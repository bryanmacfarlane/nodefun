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

var issues = {};

var checkHasValue = function(field, val, message)
{
    if (val == "")
    {
        var reason = message == undefined ? "'" + field + "' is required" : message;
        addIssue(field, reason);
    }
}

var isInSet = function(val, validVals)
{
    var result = true;

    if (val == "" || validVals.indexOf(val) < 0)
    {
        result = false;
    }

    return result;
}

var addIssue = function(field, issue)
{
    issues[field] = issue;
}

/**
 * Process student rules
 * @param student
 */
exports.validateStudent = function(student)
{
    issues = {};

    // name is required
    checkHasValue("name", student.name);

    if (!isInSet(student.grade, ["A", "B", "C", "D", "F"]))
    {
        addIssue('grade', "grade must be A - D or F");
    }

    if (student.grade == 'F')
    {
        checkHasValue("comment", student.comment, "comment required if grade is an F");
    }
    return issues;
}


