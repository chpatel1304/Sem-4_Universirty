import numpy as np
import matplotlib.pyplot as plt
a1=[1,2,3,4,5,6,7,8,9,0]
a2=[11,12,13,14,15,16,17,18,19,20]
plt.xlabel("a1")
plt.ylabel("a2")
plt.title("Graph")
plt.plot(a1,a2,"--*g")
plt.plot(a2,a1,"--*")
plt.annotate(xy=[1,6],text='first Entry')
plt.legend(['one','two'],loc='best')
plt.fill_between(a1,a2,color="g",alpha=0.7)
plt.plot(a1,a2,color="r")
plt.show()
