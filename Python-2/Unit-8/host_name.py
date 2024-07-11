import socket
# Get the hostname of the current machine
hostname = socket.gethostname()
# Get the IP address associated with the hostname
ip_address = socket.gethostbyname(hostname)
# Create a dummy socket to get the port
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind(('localhost', 0)) # Bind to a random available port
    _, port = s.getsockname()
# Print the IP address and port
print("Hostname:", hostname)
print("IP Address:", ip_address)
print("Port:", port)