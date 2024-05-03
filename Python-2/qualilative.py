import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt 
from pandas.plotting import parallel_coordinates
df=pd.read_csv("Datasets\\auto-mpg.csv")
pll=parallel_coordinates(df,'cylinders',cols=['mpg','acceleration','origin'],color=['red','green','blue','yellow','orange'])
plt.show()
