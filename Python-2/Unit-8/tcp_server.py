import socket
host=socket.gethostname()
port=2000
Addr=(host,port)
server_socket=socket.socket()
server_socket.bind(Addr)
server_socket.listen()
conn,addr=server_socket.accept()
print("Connection from ",str(addr))
while True:
    data=conn.recv(1024).decode()
    if not data:
        break
    print(data)
    data=input("->")
    conn.send(data.encode())
conn.close()