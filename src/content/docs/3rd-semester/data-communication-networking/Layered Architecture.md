Uses separate functional layers
Transparent implementation
## OSI Model
Stands for Open System Interconnect
Provide communication regardless of underlying architecture

Has 7 Layers with well defined functions, Boundaries make sure there's minimum information flow across layers.

![[Pasted image 20250818204059.png]]
### Physical Layer
- Consists of cables, connectors, wireless radio transceivers
- Accepts raw string of bits and transmit it across
- Functions
	- Encoding and signaling
	- Data transmission and reception
	- Topology and physical network design
### Data Link Layer
- Provide error free transmission across single link
- Functions
	- Data framing
	- Error detection and handling
	- Flow Control
	- Addressing - hardware level
### Network Layer
- Deliver packets (Datagrams) from sender to receiver across a network
- Shield higher layers from details of how packets got to their destination
- Function
	- Logical addressing
	- Routing
	- Datagram encapsulation
	- Congestion control
	- Quality of service
### Transport layer
- Provide end to end delivery from one host to the other
- Functions
	- Connection establishment
	- Multiplexing and Demultiplexing
	- Error detection and correction
	- Flow control
	- Quality of Service
### Session Layer
- Provide a means of controlling the dialog between two end users
- Functions
	- Dialog control (Full vs Half Duplex)
	- Token management
	- Synchronization
	- Recovery management
### Presentation Layer
- Formatting data for transmission
- Functions
	- Translation
	- Compression
	- Encryption
### Application Layer
- Provide network based applications to users
- Ex:
	- File transfer
	- Email
	- World Wide Web