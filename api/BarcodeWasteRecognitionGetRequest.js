/**
*  Get instructions on how to properly dispose an item given its barcode number. Sends a GET request to the 
*  ZotBins pythonanywhere API. Each JSON object is one break beam observation.
*
*  E.g. https://zotbins.pythonanywhere.com/barcode/get?barcode=305210041806
*
*  @param barcode  the barcode number of the item
*  @return				 instructions on how to properly dispose of waste
*  								 more details: https://github.com/zotbins/ZotBinsAPI
*
*/
export default async function BarcodeWasteRecognitionGetRequest(barcode) {
    try {
        let url = "https://zotbins.pythonanywhere.com/barcode/get?barcode=" + barcode
        let params = {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }
        let response = await fetch(url, params);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        // TODO: Probably shouldn't return dummy data here. We could let the callee handle it and notify the user of an error.
				return {
        		"barcode": barcode,
						"instructions": "",
						"name": "",
						"type": "",
						"wasteBin": "Landfill"
				};
    };
}
