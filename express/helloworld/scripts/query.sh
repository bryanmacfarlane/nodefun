echo AppID: _${APPLICATION_ID}_
echo RestAPI: _${REST_API_KEY}_
echo
echo querying...

curl -X GET -H "X-Parse-Application-Id: ${APPLICATION_ID}" -H "X-Parse-REST-API-Key: ${REST_API_KEY}" -H "Content-Type: application/json" https://api.parse.com/1/classes/Student

echo