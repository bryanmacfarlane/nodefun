echo AppID: _${APPLICATION_ID}_
echo RestAPI: _${REST_API_KEY}_
echo
export STUDENT_ID="syhTso4hxj"
echo Delete Student: ${STUDENT_ID}
echo deleting...

curl -X DELETE -H "X-Parse-Application-Id: ${APPLICATION_ID}" -H "X-Parse-REST-API-Key: ${REST_API_KEY}" -H "Content-Type: application/json" https://api.parse.com/1/classes/Student/${STUDENT_ID}

echo