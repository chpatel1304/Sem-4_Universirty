from socket import *
def createServer():
    serversocket = socket()
    serversocket.bind(('localhost',9050))
    serversocket.listen()
    while(1):
        (clientsocket, address) = serversocket.accept()
        rd = clientsocket.recv(5000).decode()
        print(rd)
        data = "HTTP/1.1 200 OK\nContent-Type:text/html; charset=utf-8\n\n<html><body><h1 style='color:red'>Hello Wolrd</h1></body></html> \n\n"
        clientsocket.send(data.encode())
    serversocket.close()
print('Access http://localhost:9050')
createServer()