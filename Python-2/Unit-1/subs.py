import pandas as pd
df=pd.read_csv("C:\\Sem 4\\Datasets\\subs.csv")
s=df[(df > 200)].size
# size=s.size
print(s)
# print(df.head(12))
# print(df.to_string())