echo AppID: _${APPLICATION_ID}_
echo RestAPI: _${REST_API_KEY}_
echo
export STUDENT_NAME="John Doe"
export STUDENT_GRADE="B"
echo Student: ${STUDENT_NAME}
echo Grade: ${STUDENT_GRADE}
echo creating...

curl -X POST -H "X-Parse-Application-Id: ${APPLICATION_ID}" -H "X-Parse-REST-API-Key: ${REST_API_KEY}" -H "Content-Type: application/json" -d "{\"name\": \"${STUDENT_NAME}\", \"grade\": \"${STUDENT_GRADE}\"}" https://api.parse.com/1/classes/Student

echo