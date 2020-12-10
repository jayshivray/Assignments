	HTTP request
	 GET http://localhost:300/blog/name=id or http://localhost:300/blog/name=id
				
			
	Path parameters
		name : id which is return when blog is created or if empty parameter get the list of blogs 
		
	Example
    http://localhost:300/blog or http://localhost:300/blog/5fd271a5a8f5972230880117
		
	Request body
	The request body must be empty.	
		
	Response body
	If successful, the response body contains an instance of Policy.

	Example
	getting information about single blog
	{
			"code": 200,
			"status": 1,
			"data": [
					{
							"_id": "5fd271a5a8f5972230880117",
							"createDate": "12/11/2020 12:36:13 AM",
							"author": "Deepak",
							"blogTitle": "my 1st blog",
							"blogBody": "this is my 1st blog. i just loving it",
							"__v": 0
					}
			],
			"message": "success",
			"error": null
	}
	
	getting list of blogs
	{
			"code": 200,
			"status": 1,
			"data": [
					{
							"_id": "5fd271a5a8f5972230880117",
							"createDate": "12/11/2020 12:36:13 AM",
							"author": "Deepak",
							"blogTitle": "my 1st blog",
							"blogBody": "this is my 1st blog. i just loving it",
							"__v": 0
					},
					{
							"_id": "5fd27a20a8f5972230880118",
							"createDate": "12/11/2020 1:12:24 AM",
							"author": "Deepak123",
							"blogTitle": "my 1st blog",
							"blogBody": "this is my 1st blog. i just loving it",
							"__v": 0
					}
			],
			"message": "success",
			"error": null
	}	
2]-------------------------------------------------------------------------	
	HTTP request
	 POST http://localhost:300/blog
			
	Path parameters : no parameter
		
	Example
    http://localhost:300/blog
		
	request body contain following fields
	{
		"author": "Deepak Parab",
		"blogTitle": "my 1st blog",
		"blogBody": "this is my 1st blog. i just loving it" 
	}	
		
	Response body : If successful, the response body contains instance of blog
	Example
	{
    "code": 200,
    "status": 1,
    "data": {
        "_id": "5fd271a5a8f5972230880117",
        "createDate": "12/11/2020 12:36:13 AM",
        "author": "Deepak Parab",
        "blogTitle": "my 1st blog",
        "blogBody": "this is my 1st blog. i just loving it",
        "__v": 0
    },
    "message": "success",
    "error": null
	}		
3]---------------------------------------------------------------------------
	Method: localhost:300/blog.delete (delete blog)
	HTTP request
	 DELETE http://localhost:300/blog/name=id
		
	Path parameters
		name : id which is return when blog is created
		
	Example
    http://localhost:300/blog/5fd271a5a8f5972230880117
		
	Request body
	The request body must be empty.		

	Response body : If successful, the response body contains following data
	Example
	{
			"code": 200,
			"status": 1,
			"data": {
					"_id": "5fd271a5a8f5972230880117",
					"createDate": "12/11/2020 1:12:24 AM",
					"author": "Deepak123",
					"blogTitle": "my 1st blog",
					"blogBody": "this is my 1st blog. i just loving it",
					"__v": 0
			},
			"message": "success",
			"error": null
	}	
4]---------------------------------------------------------------------------

	Method: localhost:300/blog.patch (update blog details)
	 	 
	HTTP request
	 PATCH http://localhost:300/blog/name=id
		
	Path parameters
		name : id which is return when blog is created
		
	Example
    http://localhost:300/blog/5fd271a5a8f5972230880117

	request body contain user info which is going to commnet on specific blog.
	{
		"userName":"Vikram",
		"commnet":"keep it up"
	}	
		
	Response body : If successful, the response body contains following data
	Example
	{
			"code": 200,
			"status": 1,
			"data": {
					"n": 1,
					"nModified": 1,
					"ok": 1
			},
			"message": "success",
			"error": null
	}

5]---------------------------------------------------------------------------
	HTTP request
	 POST http://localhost:300/blog/comments/name=id
							
	Path parameters
		name : id which is return when blog is created coz u are commenting on specif blog
		
	Example
    http://localhost:300/blog/comments/5fd271a5a8f5972230880117
		
	Request body
	{
		"userName":"Vikram",
		"commnet":"keep it up"
	}	
		
	Response body
	If successful, the response body contains an instance comment.
	{
			"code": 200,
			"status": 1,
			"data": {
					"commnet": "keep it up",
					"commnets": [],
					"_id": "5fd27cc9a8f5972230880119",
					"parent_blog_id": "5fd271a5a8f5972230880117",
					"date": "12/11/2020 1:23:45 AM",
					"userName": "Vikram",
					"__v": 0
			},
			"message": "success",
			"error": null
	}
6]---------------------------------------------------------------------------
HTTP request
	 POST http://localhost:300/blog/comments/name=id
							
	Path parameters
		name : id which is return when blog is created or if we have to comment on existing comment on specific blog then 
		we have to specif that use id like i m refering above id which is different -> (5fd27cc9a8f5972230880119)
		now i m going to comment on vikram`s comment 
		
	Example
    http://localhost:300/blog/comments/5fd27cc9a8f5972230880119
		
	Request body
	{
		"userName":"Deepak",
		"commnet":"Thanks Bro"
	}	
		
	Response body
	If successful, the response body contains an instance comment.
	{
			"code": 200,
			"status": 1,
			"data": {
					"commnet": "keep it up",
					"commnets": [],
					"_id": "5fd27cc9a8f5972230880119",
					"parent_blog_id": "5fd271a5a8f5972230880117",
					"date": "12/11/2020 1:23:45 AM",
					"userName": "Vikram",
					"__v": 0
			},
			"message": "success",
			"error": null
	}
7]---------------------------------------------------------------------------
	HTTP request
	 GET http://localhost:300/blog/commentsname=id
				
			
	Path parameters
		name : id which is return when blog is created.getting comments on specific blog 
		
	Example
    http://localhost:300/blog/5fd271a5a8f5972230880117
		
	Request body
	The request body must be empty.	
		
	Response body
	If successful, the response body contains an instance comments.

	Example
	getting information about all comments on specific blog
	{
			"code": 200,
			"status": 1,
			"data": {
					"_id": "5fd271a5a8f5972230880117",
					"createDate": "12/11/2020 12:36:13 AM",
					"author": "Deepak",
					"blogTitle": "my 1st blog",
					"blogBody": "this is my 1st blog. i just loving it",
					"comments": [
							{
									"commnet": "keep it up",
									"commnets": [
											{
													"userName": "Deepak",
													"commnet": "Thanks Bro"
											}
									],
									"_id": "5fd27cc9a8f5972230880119",
									"parent_blog_id": "5fd271a5a8f5972230880117",
									"date": "12/11/2020 1:23:45 AM",
									"userName": "Vikram",
									"__v": 0
							}
					]
			},
			"message": "success",
			"error": null
	}
---------------------------------------------------------------------------	