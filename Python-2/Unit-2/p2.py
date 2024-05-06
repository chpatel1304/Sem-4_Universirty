import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
math=np.arange(12)
loss=np.array([5,6,8,9,10,7,3,2,7,6,3,5])
gain=np.array([10,7,3,2,5,8,9,6,3,2,8,7])
fig,ax=plt.subplots(figsize=(8,8))
ax.plot(math,loss,color='red')
ax.plot(math,gain,color='green')
ax.fill_between(math,loss,gain,where=(gain>loss),color='green',interpolate='True',label='+ve',alpha=0.6)
ax.fill_between(math,loss,gain,where=(gain<loss),color='red',interpolate='True',label='+ve',alpha=0.6)
plt.title("Loss Profit Ananlyisis")
plt.xlabel("Month")
plt.ylabel("Loss Vs Profit")
plt.show()