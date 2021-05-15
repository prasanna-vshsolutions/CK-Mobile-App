export async function api(apiUri, method = 'GET', body = null, formData = null, csrf = null) {
  const headers = {};

  const uri = "http://192.168.0.9:3000"+apiUri;

  if (csrf) {
    headers['X-CSRF-Token'] = csrf;
    headers['Access-Control-Allow-Origin'] = "*"
  }

  let response;
  try {
    if (body) {
      headers['Content-Type'] = 'application/json';
      response = await fetch(uri, {
        method: method,
        body: JSON.stringify(body),
        mode: 'no-cors',
        headers,
      });
      console.log(response.headers,"HEADER RESPONSE")
    } else if (formData) {
      // var formDataMethod = formData.get('_method');
      const channel = await makeRequest(method, uri, formData, csrf);
      if (apiUri === '/users.json' && formDataMethod === 'delete') {
        return null;
      } else {
        return JSON.parse(channel);
      }
    } else {
      response = await fetch(uri, {
        method: method || 'GET',
        headers,
        credentials: 'include',
      });
      console.log(response.headers,"HEADER RESPONSE35")

    }
    if (apiUri === "/me/me_v2.json") {
      return response
    }
    if (apiUri !== '/users/sign_out') {
      const json = await retrieveJSON(response);
      return json;
    }
    
    return null;
  } catch (error) {
    if (
      error.message === 'Failed to fetch' ||
      error.message === 'NetworkError when attempting to fetch resource.'
    ) {
      throw new Error('connection error');
    }
  }
}
export function retrieveJSON(response) {
  return response.json();
}

async function makeRequest(method, url, formData, csrf) {
  try {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();

      xhr.open(method, url, true);
      if (csrf) {
        // Send the proper header information along with the request
        xhr.setRequestHeader('X-CSRF-Token', csrf);
      }
      xhr.withCredentials = true;

      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          resolve(xhr.response);
        }
      };
      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send(formData);
    });
  } catch (error) {
    if (
      error.message === 'Failed to fetch' ||
      error.message === 'NetworkError when attempting to fetch resource.'
    ) {
      throw new Error('connection error');
    }
  }
}
