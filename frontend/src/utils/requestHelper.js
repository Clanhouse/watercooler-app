/* eslint-disable no-param-reassign */
const headers = {
  // eslint-disable-next-line prettier/prettier
  Accept: 'application/json',
  'Content-type': 'application/json',
};

class RequestHeleper {
  constructor(domain) {
    this.domain = domain;
  }

  joinUrl(url) {
    return `${this.domain}/${url}`;
  }

  request(url, method = 'POST', data = null) {
    url = this.joinUrl(url);
    const options = {
      headers,
      method,
    };

    if (data) {
      options.body = JSON.stringify({ ...data });
    }
    return fetch(url, options);
  }

  post(url, data) {
    const method = 'POST';
    return this.request(url, method, data).then((response) =>
      response.json()
    );
  }

  get(url, id) {
    const method = 'GET';

    if (id) {
      url = `${url}/${id}`;
    }
    return this.request(url, method).then((response) =>
      response.json()
    );
  }

  delete(url, id) {
    const method = 'DELETE';
    if (id) {
      url = `${url}/${id}`;
    }
    return this.request(url, method).then((response) =>
      response.json()
    );
  }
}

export default RequestHeleper;
