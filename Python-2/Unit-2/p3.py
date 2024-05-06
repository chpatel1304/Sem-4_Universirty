import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
x=np.arange(1,6)
y1=np.array([2,3,4,5,6])
y2=np.array([4,5,7,8,9])
y3=np.array([6,8,9,10,11])
plt.stackplot(x,y1,y2,y3,labels=['A','B','C','D'],colors=['red','yellow','green'])
plt.legend(loc='best')
plt.show()