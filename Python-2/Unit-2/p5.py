import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import networkx as nx
g=nx.DiGraph()
g.add_node(1)
g.add_nodes_from([2,3])
g.add_nodes_from(range(4,7))
g.add_edge(1,2)
g.add_edges_from([(1,1),(3,4),(4,5),(5,6),(6,1)])
nx.draw_networkx(g,node_size=950,node_color='red',width=5,edge_color='blue')
plt.show()