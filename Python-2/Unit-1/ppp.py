import pandas as pd
df=pd.read_csv("C:\\Sem 4\\Datasets\\subs.csv")
s=df[(df['Subscribers gained'] > 200)].size
print(s)