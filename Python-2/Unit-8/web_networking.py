import socket
mysock=socket.socket()
mysock.connect(("www.amarfabricators.co.in",80))
cmd="GET https://www.amarfabricators.co.in/about-us/     HTTP/1.0\n\n".encode()
mysock.send(cmd)
while True:
    data=mysock.recv(1024)
    if len(data)<1:
        break
    print(data.decode(),end="")
mysock.close()