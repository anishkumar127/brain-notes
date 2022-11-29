HTTP status codes are standard response codes returns by the web server in response to the request made to them.

## HTTP Status Code

The status code provides information about the status of the request. It also helps to identify the cause of the problem when a web page or other resource does not load properly.

Some common status codes are:

-   **200** - the server successfully returned the page
-   **404** - the requested page doesn't exist
-   **503** - the server is temporarily unavailable

The following section lists the HTTP status codes that might be returned along with a description.

## 1xx Informational

100 Continue

This means the client should continue with its request. The server returns this response code to inform the client that the initial part of the request has been received and has not yet been rejected by the server.

101 Switching Protocols

This means the requester has asked the server to switch protocols and the server is acknowledging that it will do so.

---

## 2xx Successful

200 OK

The server successfully processed the request. Generally, this means that the server provided the requested page.

201 Created

This means the request was successful and the server created a new resource.

202 Accepted

This means the server has accepted the request for processing, but the processing has not been completed.

203 Non-Authoritative Information

This means the server successfully processed the request, but is returning information that may be from another source.

204 No Content

This means the server successfully processed the request, but isn't returning any content.

205 Reset Content

This means the server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.

206 Partial Content

The server is delivering only part of the resource due to a range header sent by the client.

---

## 3xx Redirection

300 Multiple Choices

Indicates multiple options for the resource that the client may follow. It, for instance, could be used to present different format options for video or list files with different extensions.

301 Moved Permanently

The requested page has been permanently moved to a new location. When the server returns this response, it automatically forwards the requester to the new location.

302 Found

This means the requested resource resides temporarily under a different location, but the requester should continue to use the original location for future requests.

303 See Other

This means the response to the request can be found under a different location using a GET method.

304 Not Modified

Indicates the requested resource hasn't been modified since the last request.

305 Use Proxy

This means the requester can only access the requested resource using a proxy. Many HTTP clients (such as Mozilla and Internet Explorer) do not correctly handle responses with this status code, primarily for security reasons.

306 Switch Proxy

_No longer used._

307 Temporary Redirect

This means the requested resource resides temporarily under a different location, but the requester should continue to use the original location for future requests. In contrast to 302, the request method should not be changed when reissuing the original request. For instance, a POST request must be repeated using another POST request.

308 Permanent Redirect (experimental)

This means the request, and all future requests should be repeated using another URL. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change.

---

## 4xx Client Error

400 Bad Request

This means the request cannot be fulfilled due to bad syntax.

401 Unauthorized

The request requires user authentication. The server might return this response for a page behind a login.

402 Payment Required

This code is reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, but that has not happened.

403 Forbidden

The request was a valid request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.

404 Not Found

This means the server can't find the requested page. For instance, the server often returns this code if the request is for a page that doesn't exist on the server.

405 Method Not Allowed

This means the method specified in the request is not allowed. For example, using GET on a form which requires data to be presented via POST.

406 Not Acceptable

This means the requested resource can't respond with the content characteristics requested.

407 Proxy Authentication Required

This code is similar to 401 (Unauthorized), but indicates that the client must first authenticate itself with the proxy.

408 Request Timeout

The server timed out waiting for the request. This means the client did not produce a request within the time that the server was prepared to wait. The client MAY repeat the request without modifications at any later time.

409 Conflict

This means the request could not be completed due to a conflict with the current state of the resource.

410 Gone

Indicates that the resource requested is no longer available at the server and will not be available again.

411 Length Required

This means the server refuses to accept the request without a defined Content-Length.

412 Precondition Failed

This means the server does not meet one of the preconditions that the requester put on the request.

413 Request Entity Too Large

This means the server is refusing to process a request because it is larger than the server is willing or able to process.

414 Request-URI Too Long

This means the server is refusing to process the request because the Request-URI (typically, a URL) is longer than the server is willing to interpret.

413 Request Entity Too Large

This means the server is refusing to process a request because it is larger than the server is willing or able to process.

413 Request Entity Too Large

This means the server is refusing to process a request because it is larger than the server is willing or able to process.

415 Unsupported Media Type

The server is refusing to process the request because the entity of the request is in a format which is not supported by the server or requested resource.

416 Requested Range Not Satisfiable

The server returns this status code if the request is for a range not available for the selected resource.

417 Expectation Failed

This means the server cannot meet the requirements of the Expect request-header field.

---

## 5xx Server Error

500 Internal Server Error

This means the server encountered an unexpected condition which prevented it from processing the request.

501 Not Implemented

This means the server either does not recognize the request method, or it lacks the ability to handle the request.

502 Bad Gateway

This means the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.

503 Service Unavailable

This means the server is currently unable to handle the request because it is overloaded or down for maintenance. Generally, this is a temporary state.

504 Gateway Timeout

This means the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server.

505 HTTP Version Not Supported

This means the server does not support, or refuses to support, the HTTP protocol version used in the request.