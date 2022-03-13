### What is REST?

REST (Representational State transfer) is an architectural style for developing web services which exploit the ubiquity of HTTP protocol and uses HTTP method to define actions. It revolves around resource where every component being a resource that can be accessed through a shared interface using standard HTTP methods.

In REST architecture, a REST Server provides access to resources and REST client accesses and makes these resources available. Here, each resource is identified by URIs or global IDs, and REST uses multiple ways to represent a resource, such as text, JSON, and XML. XML and JSON are nowadays the most popular representations of resources.

### What is a RESTful Web Services?

Mostly, there are two kinds of Web Services:

* **SOAP (Simple Object Access Protocol):** an XML-based method to expose web services.

* **RESTful web services:** Web Services developed in the REST style are referred to as RESTful web services. These web services use HTTP methods to implement the concept of REST architecture. A RESTful web service usually defines a URI, Uniform Resource identifier a serivce, provides resource representation like JSON and a set of HTTP methods.

### What is "Resource" in REST?
REST architecture treats any content as a resource, which can be either text files, HTML pages, images, videos or dynamic business information.

REST Server gives access to resources and modifies them, where each resource is identified by UIRs/Global IDs.

### Which prootocol is used by RESTful web services?

RESTful web services use the HTTP protocol as a medium of communication between the client and the server.

### What are the key features of REST?

* REST is stateless, therefore the SERVER has no status (or session data). With a well-applied REST API, the server could be restarted between two calls, 

* Web service uses POST method primarily to perform operations, while REST uses GET for accessing resources.

### What is messaging in RESTful Web services?

RESTful web services use the HTTP protocol as communication tool between the client and the server. The technique that when the client sends a message in the form of an HTTP request, the server sends back the HTTP reply is called Messaging. These messages comprise message data and metadata, that is, information on the message itself.

### What are the core components of an HTTP request?

An HTTP request contains five key elements:

1. An action showing HTTP methods like GET, PUT, POST, DELETE.
2. Uniform Resource Identifier(URI), which is the identifier for the resource on the server.
3. HTTP Version, which idicates HTTP version, for example-HTTP v1.1.
4. Request Header, Which carries metadata (as key-value pairs) for the HTTP Request message. Metadata could be a client (or browser) type, format supported by the client, format of a message boday format, cache settings, and so on.
5. Request Body, which indicates the message content or resource representation.
