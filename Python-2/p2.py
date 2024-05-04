import matplotlib.pyplot as plt
import pandas as pd
df=pd.read_csv("Datasets\\auto-mpg.csv")
qua1=df['acceleration'].quantile(0.25)
qua3=df['acceleration'].quantile(0.75)
IQR=qua3-qua1
low=qua1-(IQR*1.5)
high=qua3+(IQR*1.5)
ds=df.loc[(df['acceleration']>=low)|(df['acceleration']<=high)]
print(ds)

