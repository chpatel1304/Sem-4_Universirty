import pandas as pd
age=[18,20,23,19,18,22]
city=['A','B','B','A','C','B']
df=pd.DataFrame({'Age':age,'City':city})
print(df)
df1=pd.get_dummies(data=df)
print(df1)