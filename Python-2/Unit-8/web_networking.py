import socket
mysock=socket.socket()
mysock.connect(("www.gtu.ac.in",80))
cmd="GET https://www.gtu.ac.in/Circular_Acedemics.aspx HTTP/1.0\n\n".encode()
mysock.send(cmd)
while True:
    data=mysock.recv(1024)
    if len(data)<1:
        break
    print(data.decode(),end="")
mysock.close()