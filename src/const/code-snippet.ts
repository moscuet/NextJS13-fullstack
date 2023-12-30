export const php = `

$url = 'https://textsimilarityapi-eight.vercel.app/api/v1/similarity';

$apiKey = 'YOUR_API_KEY';
$data = [
    'text1' => 'Hello World',
    'text2' => 'Hello Universe'
];

$headers = [
    'Authorization: ' . $apiKey,
    'Content-Type: application/json'
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);
if (!$response) {
    die('Error: "' . curl_error($ch) . '" - Code: ' . curl_errno($ch));
}

curl_close($ch);
echo $response;
`;


export const nodejs = `const axios = require("axios");

const requestOptions = {
    method: 'POST',
    url: 'https://textsimilarityapi-eight.vercel.app/api/v1/similarity',
    data: {
      text1: 'Hello World',
      text2: 'Hello Universe'
    },
    headers: {
      'Authorization': 'YOUR_API_KEY',
    }
};

axios.request(requestOptions).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});`

export const python = `import requests

apiEndpoint = 'https://textsimilarityapi-eight.vercel.app/api/v1/similarity'
apiKey = 'YOUR_API_KEY'
inputText1 = 'Hello World'
inputText2 = 'Hello Universe'

apiHeaders = {
    'Authorization': apiKey
}

requestData = {
    'text1': inputText1,
    'text2': inputText2
}

response = requests.post(apiEndpoint, headers=apiHeaders, json=requestData)

if response.status_code == 200:
    responseData = response.json()
    print(responseData)
else:
    print(f'API Request Failed: Status Code {response.status_code}')`
