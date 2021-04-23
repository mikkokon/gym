export const get = async () => {
  const apiUrl = 'http://localhost:3000/comments';
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const response = await fetch(apiUrl,
      {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
  
    return await parseResponse(response);
}

const parseResponse = async(response: any) =>  {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  console.log('response: ', response)
  const json = await response.json();
  
  return json;
}




      /** 
   * Sends a GET-request to the server.
   * @param url
   * @param data
   * @return {Promise<any>} Server response in a JSON-format
   */
  // async get(url = '', data: any = {}): Promise<any> {
  //   url = this.getAPIURL(url) + '?';

  //   for (const key in data) {
  //     if (key) {
  //       url += key + '=' + data[key] + '&';
  //     }
  //   }
  //   const finalURL = url.slice(0, -1); // Remove trailing "&".

  //   try {
  //     const response = await fetch(finalURL, {
  //       ...this.commonFetchParameters,
  //       method: 'GET',
  //       headers: this.commonHeaders,
  //     });
  //     this.handleSessionRefresh();

  //     return await this.parseResponse(response);
  //   } catch (err) {
  //     console.log(err);
  //     // AuthService.logout();
  //   }

  //   return {};
  // }

  // convert the object into JSON, and send it to a server
  // const myObj = { name: "John", age: 31, city: "New York" };
  // const myJSON = JSON.stringify(myObj);
  // console.log('myJSON: ', myJSON) // {"name":"John","age":31,"city":"New York"}

  // you receive data in JSON format, convert it into a JavaScript object
  // const myJSON = '{"name":"John", "age":31, "city":"New York"}';
  // const myObj = JSON.parse(myJSON);
  // console.log('myObj: ', myObj) // {name: "John", age: 31, city: "New York"}