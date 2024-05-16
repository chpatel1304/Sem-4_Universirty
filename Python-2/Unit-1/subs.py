import pandas as pd
df=pd.read_csv("subs.csv")
print(df.squeeze())
print(type(df.squeeze()))
# print(df.head(12))
# print(df.to_string())