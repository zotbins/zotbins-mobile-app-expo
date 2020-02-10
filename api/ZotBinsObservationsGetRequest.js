/**
*  Get break beam observations from the West Food Court bins. Sends a GET request to the ZotBins temp API.
*  Each JSON object is one break beam observation. Getting the length of the response JSON will give us the
*  total amount of items thrown into the corresponding bin.
*
*  E.g. https://zotbins.pythonanywhere.com/observation/get?sensor_id=ZBin4B&start_timestamp=2020-02-01+09%3A30%3A01&end_timestamp=2020-02-03+12%3A30%3A01
*
*  @param binType  the type of the sensor (compost, recycle, or waste)
*  @return         amount of items in that bin
*/
export default async function ZotBinsObservationsGetRequest(binType) {
    try {
        if (binType == "compost") {
            let sensorId = "ZBin3B";
        } else if (binType == "recycle") {
            let sensorId = "ZBin4B";
        } else {
            let sensorId = "ZBin2B";
        }
        let url = "https://zotbins.pythonanywhere.com/observation/get?sensor_id=" + sensorId + "&start_timestamp=2020-02-01+09%3A30%3A01&end_timestamp=2020-02-03+12%3A30%3A01";
        let params = {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }
        let response = await fetch(url, params);
        let responseJson = await response.json();
        return await responseJson.length;
    } catch (error) {
        // If there's an exception (e.g. the API is down) then return dummy data
        return [
            {
                "id": 45,
                "payload": {},
                "sensor_id": "ZBin4B",
                "timestamp": "02-02-2020 13:23:14"
            },
            {
                "id": 78,
                "payload": {},
                "sensor_id": "ZBin4B",
                "timestamp": "02-02-2020 20:17:53"
            }
        ];
    };
}
