import pandas as pd 
df=pd.read_csv("Datasets\\auto-mpg.csv")
# print(df)
# print(df.info())
# print(df['car name'])
# print(type(df['car name']))
print("ILOC")
print(df.iloc[1])
print("LOC")
print(df.loc[1])
print(df.iloc[1:5,3])
print(df.loc[1:5])