//MakeFile Server
build:
	docker build -t 7020079170/demandderver-api .
run:
	docker run -d -p 5000:5000 7020079170/demandserver-api

