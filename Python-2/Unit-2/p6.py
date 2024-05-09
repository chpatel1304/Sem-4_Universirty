from pywaffle import Waffle
import matplotlib.pyplot as plt
import pandas as pd
data={'phone':['Xiami','Apple','Redmi','Samsung','Vivo'],'Stock':[20,25,16,18,15]}
d=pd.DataFrame(data)
fig=plt.figure(FigureClass=Waffle,rows=10,values=d.Stock,labels=list(d.phone))
plt.show()
