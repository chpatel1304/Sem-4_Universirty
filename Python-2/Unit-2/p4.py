import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
x1=np.random.rand(50)*5
x2=(np.random.rand(50)*5)+25
x3=np.random.rand(25)*30
x=np.concatenate((x1,x2,x3))
y1=np.random.rand(50)*5
y2=(np.random.rand(50)*5)+25
y3=np.random.rand(25)*30
y=np.concatenate((y1,y2,y3))
c_array=['b']*50+['g']*50+['r']*25
plt.scatter(x,y,c=c_array,marker='D',s=[50])
plt.show()